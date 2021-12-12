const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema/schema");
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
  }));

app.listen(5000, () => {
  console.log("listening on 5000");
});
