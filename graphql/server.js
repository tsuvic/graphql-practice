//https://www.cview.co.jp/cvcblog/2020.09.23.yN1U0r8fLlc4XF-i8Mx7K
//https://the-guild.dev/graphql/tools/docs/migration/migration-from-import
//https://zenn.dev/eringiv3/books/a85174531fd56a/viewer/a8fab6

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import resolvers from './resolvers.js';
import { join } from 'node:path'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'

const app = express();

// Set up Apollo Server
const schema = loadSchemaSync(join(process.cwd(), 'schema.graphql'), {
   loaders: [new GraphQLFileLoader()] 
  });
const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
const httpServer = http.createServer(app);
const server = new ApolloServer({
  schema: schemaWithResolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

// Apply express middleware for Apollo Server
app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server),
);

// Start the server
await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);

