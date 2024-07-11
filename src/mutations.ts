import { MutationResolvers } from "./types/graphql.types.js";

export const mutations: MutationResolvers = {
  addBook: async (_, { title, author }, { dataSources }) => {
    const newBook = { title, author };
    dataSources.books.push(newBook);
    return newBook;
  },
};
