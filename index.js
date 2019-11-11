require('./db/mongoose')
const express=require('express')
const User = require('./models/user')
const Task = require('./models/tasks')
const userRouter = require('./routes/users')
const taskRouter = require('../src/routes/tasks')
const jwt = require('jsonwebtoken')



const app = express()
const port = process.env.PORT || 3000

// app.use((res,req,next)=>{
//     if(req.method === 'GET'){
//         res.send('GET req disabled')
//     }else{
//         next()
//     }


// })

// app.use((req,res,next)=>{
//     res.status(505).send('site is down')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



const myFunction = async()=>{
    const token = jwt.sign({_id:'abc123'},'thisismynewcourse')
    console.log(token)
    const data = jwt.verify(token,'thisismynewcourse')
    console.log(data)

}


myFunction()