const mongoose = require('mongoose')
const validator =require('validator')
const bcrypt=require ('bcryptjs')
const jwt = require('jsonwebtoken')



const UserSchema = new mongoose.Schema( {
    name:{
    type:String,
    required:true,
    trim:true
},
email:{
    type:String,
    unique:true,
    required:true,
    lowercase:true,
    trim:true,
    validate(value){
         if(!validator.isEmail(value)){
             console.log('Email is invalid')
         }

    }    
},
age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error ('Age must be a positve number')
            }
        }
},
password:{
    type:String,
    required:true,
    trim:true,
    minLength:7,
    validate(value){
       if(value.toLowerCase().includes('password')){
           throw new Error('Should not contain Password')
            }
    }

},

tokens:[{
    token:{
        type:String,
        required:true
    }
}]

})

UserSchema.methods.generateAuthToken= async function(){
        const user =  this
        const token = jwt.sign({_id:user._id.toString()},'thisismynewcourse')
        user.tokens = user.tokens.concat({token})
         await user.save()
        return token
}

UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
    throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
    throw new Error('Unable to login')
    }
    return user
    }

//plain text pass before saving
UserSchema.pre('save', async function(next){
const user = this
if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password , 8)
}

next()
})

const User = mongoose.model('User', UserSchema) 
   

module.exports = User