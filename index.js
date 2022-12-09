// Import packages
const cors = require("cors");
const express = require("express");
const home = require("./routes/home");
const studnets = require("./routes/students");
const mongoose = require('mongoose');
const Studnet = require('./models/Student');

mongoose.set('strictQuery', true);

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// connection
const port = process.env.PORT || 9001;
// app.listen(port, () => console.log(`Listening to port ${port}`));

//MongoDB
const mdburl = 'mongodb+srv://Abhidemo03:9696858107@cluster0.jf2t9qo.mongodb.net/Student?retryWrites=true&w=majority';
mongoose.connect(mdburl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(port))
    .catch((err) => console.log(err));

// Routes
app.use("/home", home);

app.get('/index', (req, res) => {
    Studnet.find().sort({ createdAt: 1 })
        .then((result) => {
            //  res.render('index',{data:result})
            res.send(result)
        })
        .catch((err) => { console.log(err); })
});

app.post('/index', (req, res) => {
    const student = new Studnet(req.body)
  
    //saving it
    student.save()
      .then((result) => {
        // res.redirect('/index');
        res.send(student)
  
      })
      .catch((err) => {
        console.log(err)
      })
  });
