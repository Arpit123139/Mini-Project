const express=require("express");
const { addRecord } = require("../controllers/reportController");
const router=express.Router();


router.route("/addRecord/:token").post(addRecord)

module.exports=router