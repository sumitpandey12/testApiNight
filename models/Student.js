const mongoose = require('mongoose');

//validtor
const { isEmail } = require('validator');





const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const Studentschema = new Schema({
    name: {
        type: String,

    },
    surname: {
        type: String,


    },
    mobo: {
        type: String,
        required: [true, 'please enter an valid email pass'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']

    },
    password: {
        type: String,
        required: [true, 'please enter an valid email pass'],
        minlength: [5, 'min pass length is 5 charter']

    },

    gender: {
        type: String,
        possibleValues: ['blue', 'red', 'yellow']

    },
    img: {
        type: String

    },
    class: {
        type: String
    },
    school: {
        type: String
    },
    marks: {
        type: String
    },
    state: {
        type: String
    }


}, { timestamps: true });
const Student = mongoose.model('Student', Studentschema);
module.exports = Student;