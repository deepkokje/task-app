const mongoose = require('mongoose')
const validator =require('validator')


const Task = mongoose.model('Tasks',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false}
    })


    module.exports = Task