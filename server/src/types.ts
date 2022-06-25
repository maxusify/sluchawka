import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

export type ApolloContext = {
  prisma: PrismaClient;
  req: Request & { session: Session & Partial<SessionData> };
  res: Response;
};
