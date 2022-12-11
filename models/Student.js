const mongoose = require('mongoose');

//validtor
const { isEmail } = require('validator');





const { stringify } = require('querystring');
const Schema = mongoose.Schema;
const Studentschema = new Schema({
    name: {
        type: String,

    },
    rollNo: {
        type: String,
        unique:true


    },
    // phone: {
    //     type: String,
    //     required: [true, 'please enter an valid email pass'],
    //     unique: true,
    //     lowercase: true,
    //     validate: [isEmail, 'please enter a valid email']

    // },
    phone:{
        type:String,

    },

    gender: {
        type: String,
        possibleValues: ['blue', 'red']

    },

    course: {
        type: String
    },
    branch: {
        type: String
    },
    semester: {
        type: String
    },
    dob: {
        type: String
    },
    houseNo: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    distric: {
        type: String
    },
    pin: {
        type: String
    },
    landmark: {
        type: String
    },



}, { timestamps: true });
const Student = mongoose.model('Student', Studentschema);
module.exports = Student;