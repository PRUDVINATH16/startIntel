const user=require('../models/users')
const bcrypt =require('bcrypt')
const jwt=require("jsonwebtoken")

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
                message:'some error  occoured'
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
        const User = await user.findOne({mobile})

        if(!User){
            return res.status(500).json({
                success:false,
                message:`Account doesn't exsist`
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, User.password)
        if(isPasswordMatch){
              const accesstoken=jwt.sign({
                userId:User._id,
                username:User.username,
               phone:User.mobile }
               ,process.env.jwt_secret,{
               expiresIn:'60m'
           })

            res.status(200).json({
                success:true,
                message:'login successfully',
                accesstoken
            })
        }
        else{
            res.status(500).json({
                success:false,
                message:'password incorrect'
            })
        }


        // const accesstoken=jwt.sign({
        //     userId:User._id,
        //     username:User.username,
        //     phone:User.mobile

        // },process.env.jwt_secret,{
        //     expiresIn:'60m'
        // })

        // res.status(200).json({
        //     success:true,
        //     message:'login successfully',
        //     accesstoken:accesstoken
        // })

    }catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:'some error occoured',
           
        })
    }
}

const changePassword= async(req,res)=>{
try{
    const userId = req.user.userId;  

    const { oldPassword, newPassword } = req.body;
     // 1. Find user by ID
     const User = await user.findById(userId);
     if (!User) {
       return res.status(404).json({ success: false, message: "User not found" });
     }
 
     // 2. Compare old password
     const isMatch = await bcrypt.compare(oldPassword, User.password);
     if (isMatch) {
       return res.status(400).json({ success: false, message: "enter new password" });
     }
 
     // 3. Hash new password
     const hashedPassword = await bcrypt.hash(newPassword, 10);
 
     // 4. Update password
     User.password = hashedPassword;
     await User.save();
 
     return res.status(200).json({ 
        success: true, message: "Password changed successfully" });
  
}
catch(e)
{
    console.log(e)
        res.status(500).json({
            success:false,
            message:'some error occoured',
           
        })
}
}



module.exports = {
    loginUser,
    registeruser,
    changePassword

  };
  