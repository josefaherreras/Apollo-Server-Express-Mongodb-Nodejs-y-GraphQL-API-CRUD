//Especificar que tipos de datos podemos consultar en nuestra API de graphQL

const { gql } = require('apollo-server-express');
//extensor de un string basicamente nos permite tener resaltado de codigo dentro de un string

const typeDefs = gql`

type Task {
    id: ID,
    title: String,
    description: String
}

type Query {
    hello : String
    getAllTasks: [Task]
    getTask(id:ID): Task
}
input TaskInput {
        title: String
        description: String
    }
type Mutation {
    createTask(task : TaskInput!): Task
    deleteTask(id:ID!):String
    updateTask(id: ID!, task: TaskInput): Task
}
`

module.exports = { typeDefs };