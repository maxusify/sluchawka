import express from "express";
import { PrismaClient } from "@prisma/client";

import { __prod__ } from "./constants";

const prisma = new PrismaClient();

const main = async () => {
  const app = express();

  // await prisma.user.create({
  //   data: {
  //     name: "Max Doe",
  //     email: "max@doe.com",
  //     artist: {
  //       create: {
  //         name: "Maximalizer",
  //         bio: "I am new artist!",
  //         songs: {
  //           create: [
  //             { name: "Fire God" },
  //             { name: "Frost God" },
  //             { name: "Wind God" },
  //           ],
  //         },
  //       },
  //     },
  //   },
  // });

  const allUsers = await prisma.user.findMany({
    include: {
      artist: true,
    },
  });

  console.dir(allUsers, { depth: null });

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
