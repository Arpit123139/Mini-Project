const mongoose=require('mongoose')
const Record=require('../models/report')
const BigPromise=require('../middleware/bigpromise')
const jwt=require('jsonwebtoken')
const User=require('../models/user')

exports.addRecord=BigPromise(async(req,res)=>{

    const token=req.params.token;
    const decode=jwt.verify(token,"thisismynoteapp");

    console.log("Decode "+decode);
    const id=decode.id;

    const {report}=req.body;

    const report1=await Record.create({
        user:id,
        report:report
    })

    res.status(200).json(report1)


    
})