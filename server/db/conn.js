const mongoose = require("mongoose");

const DB="mongodb+srv://danish:danish@cluster0.zj2tupn.mongodb.net/healh?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));