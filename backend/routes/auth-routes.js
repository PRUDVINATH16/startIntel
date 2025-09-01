const express=require('express')
const router=express.Router();
const {loginUser,registeruser}=require("../controllers/auth-controller");

router.post('/register',registeruser);
router.post("/login",loginUser);


module.exports=router