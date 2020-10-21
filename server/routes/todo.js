const Router = require('express').Router();

Router.route('/addTodo').post((req, res) => {
    console.log("Request in routes: ", req.body)
})
