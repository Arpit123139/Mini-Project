const express = require("express");
const router = express.Router();
const userd = require("../models/UserSignup");
const bcrypt=require('bcryptjs')
router.post("/signup",async(req,res)=>{
    //  console.log(req.body);

    //saving the data
    const {name,email,password,phoneno,height,age,weight,address,city} = req.body;

    //checking if present
    if(!email || !password){
        res.status(422).json("plz fill the data");
    }
    try {
        
        const preuser = await userd.findOne({email:email});
        console.log(password);
        // userSchema.pre('save',async function(next){
        //     if(!this.isModified('password')) return next()
        //     this.password=await bcrypt.hash(this.password,10) 
        // })
        console.log(password);
        if(preuser){
            //console.log("already present");
            alert("saad");
            res.status(422).json("this is disease is already present");
        }else{
           // console.log("already");
            const adduser = new userd({
                name,email,password,phoneno,height,age,weight,address,city
            });
            //console.log("already1");
            await adduser.save();
            //.log("already2");
            res.status(201).json("sfas");
            console.log(adduser);
        }

    } catch (error) {
        //console.log(error);
        res.status(422).json(error);
    }


})
//signin
router.post("/signin",async(req,res)=>{
    //  console.log(req.body);

    //saving the data
    const {email,password} = req.body;

    //checking if present
    if(!email || !password){
        res.status(422).json("plz fill the data");
    }
    try {
        const preuser = await userd.findOne({email:email});
        console.log(password);
        if(preuser)
        {
            
            console.log(preuser.password);
            if(!await  bcrypt.compare(password,preuser.password)){
                console.log("1");
            return res.status(201).json("error")
            }
            else{
                console.log("2");
                res.status(422).json(preuser);
            }
        }
        else
        {
            console.log("3");
                res.status(201).json("error");
        }
        
        // const preuser = await userd.findOne({email:email,password:password});
        
        // console.log(preuser.password);
        // alert(preuser.password);
        // if(preuser){
        //     res.status(422).json(preuser);
        // }
        // else{
        //     // const adduser = new userd({
        //     //     name,email,password
        //     // });

        //     // await adduser.save();
        //     res.status(201).json("error");
        //     // console.log(adduser);
        // }
    } catch (error) {
        console.log(error)
        res.status(201).json(error);
    }


})

//get indivisual user
router.get("/getuserda/:id",async(req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params;
        const userindividual = await userd.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

// update user data

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateuserda = await userd.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateuserda);
        res.status(201).json(updateuserda);

    } catch (error) {
        res.status(422).json(error);
    }
})


// delete user
router.delete("/deletedisease/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletedisease = await disease.findByIdAndDelete({_id:id})
        console.log(deletedisease);
        res.status(201).json(deletedisease);

    } catch (error) {
        res.status(422).json(error);
    }
})



module.exports = router;
