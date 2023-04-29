const mongoose=require('mongoose');
mongoose.set('strictQuery',false) 

const connectWithDb=()=>{
    mongoose.connect("mongodb://localhost/miniProject")
    .then(console.log("Connected With The databse !!!!!!!!"))
    .catch(error=>{
        console.log("Some Error Occured")
    })
}

module.exports=connectWithDb