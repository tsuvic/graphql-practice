//https://www.cview.co.jp/cvcblog/2020.09.23.yN1U0r8fLlc4XF-i8Mx7K
//https://the-guild.dev/graphql/tools/docs/migration/migration-from-import
//https://zenn.dev/eringiv3/books/a85174531fd56a/viewer/a8fab6

import { ApolloServer } from "@apollo/server";
import resolvers from "./resolvers.js";
import { join } from "node:path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { startStandaloneServer } from '@apollo/server/standalone';

async function startApolloServer() {
  
  // Set up Apollo Server
  const schema = loadSchemaSync(join(process.cwd(), "schema.graphql"), {
    loaders: [new GraphQLFileLoader()],
  });
  const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

  const server = new ApolloServer({
    schema: schemaWithResolvers,
  });
  const { url } = await startStandaloneServer(server);
  console.log(`🚀 Server ready at ${url}`);

}
startApolloServer();
