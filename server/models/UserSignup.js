const mongoose = require("mongoose");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const UserSignup = new mongoose.Schema({
    name: {
        type: String
        
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneno:{
        type: String,
        
        
    },
    height:{
        type: String,
       
    
    },
    age:{
        type: String,
        
        
    },
    weight:{
        type: String,
       
        
    },
    address:{
        type: String,
        
        
    },
    city:{
        type: String,
        
        
    }
});


UserSignup.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    this.password=await bcrypt.hash(this.password,10) 
})

// userSchema.methods.validatePassword=async function(sendPassword){
//     return await bcrypt.compare(sendPassword,this.password)
// }       
UserSignup.methods.isValidatedPassword=async function(usersendPassword){
    return await bcrypt.compare(usersendPassword,this.password)                // this will return true /false result
}

UserSignup.methods.getjwtToken=()=>{
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRY
    })
}



const userd = new mongoose.model("userdetail",UserSignup);


module.exports = userd;