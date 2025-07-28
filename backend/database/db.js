 const mongoose = require("mongoose");
 const connect=async ()=>{
    try{
        mongoose.connect('mongodb+srv://karthikankipalli007:1VT5pmHJ9EV7qfJL@studentdatacluster.15wtdmy.mongodb.net/')
        console.log('mogodb connected');
    }catch(e){
        console.log(`error occoured while creating ${e}`)
    }
 }

 module.exports=connect
