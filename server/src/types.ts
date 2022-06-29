import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";

/**
 * Declaration merging of SessionData
 */
declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

/**
 * Type for apollo client context
 */
export type ApolloContext = {
  prisma: PrismaClient;
  req: Request & { session: Session & Partial<SessionData> };
  res: Response;
  redis: Redis;
};
