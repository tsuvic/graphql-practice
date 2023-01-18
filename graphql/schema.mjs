const typeDefs = `
  type Author {
    id: ID!
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String
    author: Author
    votes: Int
  }

  type Query {
    posts: [Post]
    author(id: ID!): Author
  }

  type Mutation {
    upvotePost(postId: ID!): Post
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;


export default typeDefs