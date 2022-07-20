import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Return prisma client
export const createPrismaClient = () => {
  return prisma;
};

// End connection
export const disconnectPrismaClient = () => {
  return prisma.$disconnect();
}