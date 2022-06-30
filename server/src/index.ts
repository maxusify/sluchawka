import "reflect-metadata";

import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import { __PORT__, __prod__, COOKIE_NAME, SESSION_SECRET } from "./constants";
import { createRedisClient, RedisStore } from "./utils/createRedisClient";
import { createApolloServer } from "./utils/createApolloServer";

// Prisma Client
const prisma = new PrismaClient();

/**
 * async main()
 * Main function of the app
 */
const main = async () => {
  // Create express app
  const app = express();

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
      store: new RedisStore({
        client: createRedisClient(),
        disableTouch: true,
      }),
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
  const appolo = await createApolloServer();
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
