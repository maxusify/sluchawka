import connectRedis from "connect-redis";
import session from "express-session";
import Redis from "ioredis";

// Create redis store for sessions
export const RedisStore = connectRedis(session);

// Create redis client
const redis = new Redis();

// Returns redis client
export const createRedisClient = () => {
  return redis;
};
