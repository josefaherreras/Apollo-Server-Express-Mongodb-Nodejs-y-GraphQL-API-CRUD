const { Schema, model } = require('mongoose');

//Base de datos
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String
});

//Codigo Backend
module.exports = model("Task", taskSchema);