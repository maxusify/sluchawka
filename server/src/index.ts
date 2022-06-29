import "reflect-metadata";

import { PrismaClient } from "@prisma/client";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import cors from "cors";
import express from "express";
import session from "express-session";
import Redis from "ioredis";
import morgan from "morgan";
import { buildSchema } from "type-graphql";

import { FindUniqueUserResolver } from "../prisma/generated/type-graphql";
import { __PORT__, __prod__, COOKIE_NAME, SESSION_SECRET } from "./constants";
import { UserResolver } from "./resolvers/User";
import { ApolloContext } from "./types";

// Prisma Client
const prisma = new PrismaClient();

/**
 * async main()
 * Main function of the app
 */
const main = async () => {
  // Create express app
  const app = express();

  // Create redis store for sessions
  const RedisStore = connectRedis(session);

  // Create redis Client
  const redis = new Redis();
  redis.on("error", (err) => {
    console.error("Redis Client Error", err);
  });

  // Cors setup
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  // Logger for http
  app.use(morgan("dev"));

  // Session setup
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // ~month
        httpOnly: true,
        secure: !__prod__,
        sameSite: "lax", // CSRF
      },
      secret: SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
    })
  );

  // Apollo server setup
  const appolo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, FindUniqueUserResolver],
      validate: false,
    }),
    context: ({ req, res }): ApolloContext => ({
      prisma,
      req,
      res,
      redis,
    }),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
      ApolloServerPluginLandingPageDisabled(),
    ],
  });
  await appolo.start();
  appolo.applyMiddleware({ app, cors: false });

  // Server listener
  app.listen(__PORT__, () => {
    console.log(`Server started on http://localhost:${__PORT__}`);
  });
};

main()
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
