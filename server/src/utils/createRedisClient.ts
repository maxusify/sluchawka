import connectRedis from "connect-redis";
import session from "express-session";
import Redis from "ioredis";

// Create redis store for sessions
export const RedisStore = connectRedis(session);
const redis = new Redis();

export const createRedisClient = () => {
  return redis;
};
