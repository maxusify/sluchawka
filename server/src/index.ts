import express from "express";
import { PrismaClient } from "@prisma/client";
import { __prod__ } from "./constants";

const prisma = new PrismaClient();

const main = async () => {
  const app = express();

  app.listen(4000, () => {
    console.log(`Server started on http://localhost:4000`);
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
