const express=require('express')
const router=express.Router();
const {loginUser,registeruser,changePassword}=require("../controllers/auth-controller");
const verifyToken = require("../ middleware/authMiddleware")



router.post('/register',registeruser);
router.post("/login",loginUser);
router.get("/profile", verifyToken, (req, res) => {
    return res.json({
      success: true,
      message: "User profile fetched",
      userId: req.user.userId,
      username: req.user.username,
      mobile: req.user.phone, // 👈 here’s your mobile number
    });
  });
router.post("/changePassword",verifyToken,changePassword);

module.exports=router