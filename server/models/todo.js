const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false,
        minLength: 3
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    completed: {
        type: Boolean
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
