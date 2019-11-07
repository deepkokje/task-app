require('./db/mongoose')
const express=require('express')
const User = require('./models/user')
const Task = require('./models/tasks')
const userRouter = require('./routes/users')
const taskRouter = require('../src/routes/tasks')





const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)






app.listen(port, () => {
    console.log('Server is up on port ' + port)
})