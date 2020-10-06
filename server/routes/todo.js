const Router = require('express').Router();

Router.route('/addTodo').post((req, res) => {
    console.log("Request: ", req.body)
})