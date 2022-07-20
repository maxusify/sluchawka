import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import { ApolloContext } from 'src/types';
import { buildSchema } from 'type-graphql';

import { FindUniqueUserResolver } from '../../prisma/generated/type-graphql';
import { UserResolver } from '../resolvers/User';
import { createPrismaClient } from './createPrismaClient';
import { createRedisClient } from './createRedisClient';

const createApolloServer = async () => {
  return new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, FindUniqueUserResolver],
      validate: false,
    }),
    context: ({ req, res }): ApolloContext => ({
      prisma: createPrismaClient(),
      req,
      res,
      redis: createRedisClient(),
    }),
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
      ApolloServerPluginLandingPageDisabled(),
    ],
  });
};

export default createApolloServer;