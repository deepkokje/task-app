const User= require('../models/user') 
 require('../db/mongoose')



// User.findByIdAndUpdate('5db7ae098a80d8146c7d4bc2',{age:21}).then((user)=>{
// console.log(user)
// return User.countDocuments({age:21})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const UpdateAgeandCount=async (id,age)=>{
const user = await User.findByIdAndUpdate(id,{age})
const count = await User.countDocuments({age})
return count
}
UpdateAgeandCount('5db7b0b7c1515c3b600ff100', 23).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})