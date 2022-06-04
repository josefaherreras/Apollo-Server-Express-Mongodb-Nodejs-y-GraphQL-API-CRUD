require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs } = require('./typeDefs');
const {resolvers} = require('./resolvers');

const {connectDB} = require('./db');

const API_PORT = process.env.PORT || 3001;

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

    
    //app.listen(API_PORT, function () {
    //    console.log('servidor iniciado', API_PORT);
    //})
    const server = app.listen(process.env.PORT || 5000, () => {
        const port = server.address().port;
        console.log(`Express is working on port ${port}`);
      });
}

start();
//http://localhost:3000/graphql