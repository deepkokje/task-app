const Task = require('../models/tasks')
require('../db/mongoose')


// Task.findByIdAndDelete('5db7a8b00994942630a7f1be').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({complete:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskandCount =  async(id)=>{
        const task = await Task.findByIdAndDelete(id)
        const count  = await Task.countDocuments({completed:false})
        return count
} 
deleteTaskandCount ('5db7b1d97acb290d7433d298')