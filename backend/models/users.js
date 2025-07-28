const mongoose=require('mongoose')

const usersSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        trim:true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type:String,
        require:true,
        trim:true
    }
})

module.exports=mongoose.model('user',usersSchema)