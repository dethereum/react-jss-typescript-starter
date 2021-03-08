import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './TypeDefs';
import resolvers from './Resolvers';

makeExecutableSchema({
  typeDefs,
  resolvers,
});