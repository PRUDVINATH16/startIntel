require("dotenv").config();
const mongoose = require("mongoose");
const connect=async ()=>{
try{
    mongoose.connect(process.env.MONGODB_URI)
}catch(e){
    console.log(`error occoured while creating ${e}`)
}
}

module.exports=connect  