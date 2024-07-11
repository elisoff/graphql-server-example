import { QueryResolvers } from "./types/graphql.types.js";

export const queries: QueryResolvers = {
  books: async (_, __, { dataSources }) => dataSources.books,
};
