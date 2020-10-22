const express = require('express')
const chalk = require('chalk')
// load env file with secret data
require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 12000
const Todo = require('./models/todo')
const {v4: generateID} = require('uuid')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.json());


app.post('/todo', async (req, res) => {
    console.log("Request: ", req.body);
    try {
        const {title} = req.body
        const id = generateID();
        const newTodo = Todo({title, id, completed: false});
        const todo = await newTodo.save();
        res.send({
            todo
        })
    }
    catch (e) {
        console.log("Error occurred when adding new todo item: ", e);
        res.sendStatus(404).json({info: "Internal error, try later or notice backend developer"})
    }
});

app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.send({todos})
    }
    catch (e) {
        console.log("Error occurred when fetching all todos: ", e);
        res.status(400).json({message: "Sorry something went wrong:("})
    }
});

app.delete('/todo/:id', async (req, res) => {
    const id = req.params.id;
    const todos = await Todo.deleteOne({id});
    res.send({todos})
});

app.put('/todo', async (req, res) => {
    try {
        const {id, title, completed} = req.body;
        const todo = await Todo.updateOne({id}, {title, completed})
        res.send({todo})
    }
    catch (e) {
        console.log("Error occurred when fetching all todos: ", e);
        res.sendStatus(400).send({error: "db error"})
    }
})

app.delete('/todos', (async (req, res) => {
    try {
        await Todo.deleteMany({});
        res.send({data: "Successfully removed all your todos..."})
    }
    catch (e) {
        console.log("Error occurred when deleting all todos: ", e);
        res.sendStatus(400);
    }
}));

// start our app with async IIFE
(async function () {
    try {
        // if we run mongodb locally, we can specify first param with localhost path
        await mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true});
        const connection = mongoose.connection;
        await connection.once('open', () => {
            console.log("MongoDB database connection established successfully");
        })
    } catch (e) {
        console.error("Got error while establishing connection with atlas...", e)
    }
    app.listen(PORT, () => {
        console.log(chalk.magenta("Server is running on ") + chalk.blue(`http://localhost:${PORT}`))
    })
})()


