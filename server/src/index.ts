import "reflect-metadata";
import express from "express";
import { PrismaClient } from "@prisma/client";
import { __PORT__, __prod__, __session_secret__ } from "./constants";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/User";
import { FindUniqueUserResolver } from "../prisma/generated/type-graphql";
import * as redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { ApolloContext } from "./types";
import cors from "cors";

// Prisma Client
const prisma = new PrismaClient();

const main = async () => {
  // Express server
  const app = express();

  // Redis Client
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient({ legacyMode: true });
  redisClient.on("error", (err) => {
    console.error("Redis Client Error", err);
  });
  await redisClient.connect();

  // Cors
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  // Session
  app.use(
    session({
      name: "qid",
      store: new RedisStore({ client: redisClient, disableTouch: true }),
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
