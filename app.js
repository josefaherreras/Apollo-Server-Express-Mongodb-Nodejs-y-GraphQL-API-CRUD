require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./typeDefs');
const {resolvers} = require('./resolvers');

const {connectDB} = require('./db');

const app = express();
connectDB();

app.get('/', (req, res) => res.send('Welcome to my api'));

module.exports = app;

async function  start() {

   const apolloServer =  new ApolloServer({
        typeDefs: typeDefs,
        resolvers : resolvers
    })

    await apolloServer.start()
    //inicializar los schemas

    apolloServer.applyMiddleware({app})

    app.listen(process.env.PORT, function () {
        console.log('servidor iniciado', process.env.PORT);
    })
}

start();
//http://localhost:3000/graphql