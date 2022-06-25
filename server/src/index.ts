import "reflect-metadata";
import express from "express";
import { PrismaClient } from "@prisma/client";
import { __PORT__, __prod__ } from "./constants";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/User";
import { FindUniqueUserResolver } from "../prisma/generated/type-graphql";

// Prisma Client
const prisma = new PrismaClient();

const main = async () => {
  // Express server
  const app = express();

  // Apollo server
  const appolo = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, FindUniqueUserResolver],
      validate: false,
    }),
    context: () => ({
      prisma,
    }),
  });
  await appolo.start();
  appolo.applyMiddleware({ app });

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
