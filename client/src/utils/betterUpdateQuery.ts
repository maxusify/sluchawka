import { Cache, QueryInput } from "@urql/exchange-graphcache";

export const betterUpdateQuery = <Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  updateFun: (r: Result, q: Query) => Query
) => {
  return cache.updateQuery(qi, (data) => updateFun(result, data as any) as any);
};
