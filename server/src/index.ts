import "reflect-metadata";

import express from "express";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";

import { createApolloServer } from "./utils/createApolloServer";
import createSession from "./utils/createSession";
import createCors from "./utils/createCors";

import { __PORT__ } from "./constants";

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
  app.use(createCors);

  // Logger for http
  app.use(morgan("dev"));

  // Session setup
  app.use(createSession);

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
