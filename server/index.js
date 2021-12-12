const express = require('express');
const grapghqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', grapghqlHTTP({}));


app.listen(4000, () => {
    console.log('listening on 4000');
})
