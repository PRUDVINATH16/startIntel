const user=require('../models/users')
const bcrypt =require('bcrypt')


//creating user
const registeruser= async(req,res)=>{
    try{

        const {username, mobile, password}=req.body
        const if_registered= await user.findOne({mobile})
        if(if_registered){
            return res.status(400).json({
                success:false,
                message:'user already exist'
            });
        }
       
        const salt= await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(password,salt)

        const newuser=new user({username,mobile,password: hashedpassword})
        await newuser.save()

        if(newuser){
            res.status(200).json({
                success:true,
                message:'user created successfully'
            })
        }
        else{
            res.status(500).json({
                success:false,
                message:'some error occoured'
            })
        }

    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:'some error occoured'
        })
    }
}

//login the user

const loginUser= async(req,res)=>{
    try{
        
        const {mobile, password}=req.body
        const User= await user.findOne({mobile})

        if(!User){
            return res.status(500).json({
                success:false,
                message:`Account doesn't exsist`
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, User.password)
        if(isPasswordMatch){
            res.status(200).json({
                success:true,
                message:'login successfully'
            })
        }
        else{
            res.status(500).json({
                success:false,
                message:'password incorrect'
            })
        }


    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:'some error occoured'
        })
    }
}


module.exports = {
    loginUser,
    registeruser
  };
  