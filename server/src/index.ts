import "reflect-metadata";
import express from "express";
import { PrismaClient } from "@prisma/client";
import {
  __COOKIE_NAME__,
  __PORT__,
  __prod__,
  __session_secret__,
} from "./constants";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/User";
import { FindUniqueUserResolver } from "../prisma/generated/type-graphql";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { ApolloContext } from "./types";
import cors from "cors";
import morgan from "morgan";

// Prisma Client
const prisma = new PrismaClient();

const main = async () => {
  // Express server
  const app = express();

  // Redis Client
  const RedisStore = connectRedis(session);
  const redis = new Redis();
  redis.on("error", (err) => {
    console.error("Redis Client Error", err);
  });

  // Cors
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  // Logger
  app.use(morgan("dev"));

  // Session
  app.use(
    session({
      name: __COOKIE_NAME__,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // ~month
        httpOnly: true,
        secure: !__prod__,
        sameSite: "lax", // CSRF
      },
      secret: __session_secret__!,
      resave: false,
      saveUninitialized: false,
    })
  );

  // Apollo server
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

  // Listener
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
