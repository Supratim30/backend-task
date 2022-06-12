const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();

const MONGODB_URL = process.env.DATABASE_URL

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Error...', err);
  process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Server is running hehee :D"});
});

let PORT = 8080

require('./app/routes/app.routes.js')(app);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});