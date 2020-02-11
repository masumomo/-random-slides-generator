// server/app.js
const express = require("express");
const path = require("path");
const { buildSchema } = require("graphql");
const graphqlHTTP = require("express-graphql");
const knex = require("knex")({
  client: "pg",
  database: process.env.DATABASE_URL,
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/random_slides_generator`,
  earchPath: "public"
});
const models = require("./models")(knex);
const bodyParser = require("body-parser");
const app = express();
const Resolver = require("graphql-knex-resolver");
const resolver = Resolver.getResolver(knex);
// 3. Parse request bodies as json
app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

// 4. If the requests begin with '/api', hand them off to the API router
const schema = buildSchema(`
  type Title {
    title: String
  }
  type Query {
    Titles: [Title]
  }
  type Mutation { 
     createTitle(title: String!): String
  }
`);

// The root provides the resolver functions for each type of query or mutation.
const root = {
  Titles: () => {
    console.log("Titles list :");
    return models.titles.list().then(result => {
      console.log("result :", result);
      return result;
    });
  },
  createTitle: request => {
    console.log("Titles create :" + request.title);
    const newTitle = {
      title: request.title
    };
    return models.titles.create(newTitle).then(result => result);
  }
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);
// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
