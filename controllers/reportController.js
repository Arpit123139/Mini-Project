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
    // console.log("Report!!!!!!!! "+report)
    const recordExsist=await Record.findOne({user:id})

    if(recordExsist){
        // console.log("Record Exsist")
        const record=recordExsist.report

        // console.log("Record "+record);
        const arr=[]
        for(let i=0;i<record.length;i++)
            arr.push(record[i]);
        for(let j=0;j<report.length;j++)
            arr.push(report[j])
        
            // console.log("Array "+arr)
        const newData={
            user:id,
            report:arr
        }

        await Record.findByIdAndUpdate(recordExsist._id,newData)

        res.status(200).json({
            success:true
        })
    }
    else{
        const report1=await Record.create({
            user:id,
            report:report
        })
        res.status(200).json(report1)
    }
   

    


    
})