const express = require('express')
const chalk = require('chalk')
const env = require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose');

const PORT = process.env.PORT || 12000

const app = express();
app.use(cors());
app.use(express.json());




(async function() {
   try {
      await mongoose.connect(process.env.URI, { useNewUrlParser: true });
      const connection = mongoose.connection;
      await connection.once('open', () => {
         console.log("MongoDB database connection established successfully");
      })

   }
   catch(e) {
      console.error("Got error while establishing connection between atlas...", e)
   }
   app.listen(PORT, () => {
      console.log(chalk.magenta("Server is running on ") + chalk.blue(`http://localhost:${PORT}`))
   })
})()


