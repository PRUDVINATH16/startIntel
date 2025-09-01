const mongoose = require("mongoose");
const connect=async ()=>{
try{
    mongoose.connect('mongodb+srv://prudvinath16:PRUDVIap16@cluster0.iux6mwh.mongodb.net/')
}catch(e){
    console.log(`error occoured while creating ${e}`)
}
}

module.exports=connect