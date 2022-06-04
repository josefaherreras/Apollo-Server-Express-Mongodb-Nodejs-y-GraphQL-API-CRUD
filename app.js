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

    const API_PORT = process.env.PORT || 3001

    app.listen(process.env.PORT || 3000, function () {
        console.log('servidor iniciado', process.env.PORT || 3000);
    })
}

start();
//http://localhost:3000/graphql