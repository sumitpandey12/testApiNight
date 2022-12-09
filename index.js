// Import packages
const express = require("express");
const home = require("./routes/home");
const mongoose = require('mongoose');
const Studnet = require('./models/Student');

mongoose.set('strictQuery', true);

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
