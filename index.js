const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');
require('dotenv').config();

// Starting APP
const app = express();
app.use(express.json()); // Permit JSON transfer
app.use(cors()); // Cors is used to permit anothers hosts connect that api


// Setting Database url
const uri = process.env.MONGO_URL;

// Starting Database
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
requireDir('./src/models');

// Creating Routes
app.use('/', require('./src/routes'));

app.listen(process.env.PORT || 3003);
