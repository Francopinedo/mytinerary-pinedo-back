const { verifyPassword ,verify_data_user} = require("../middlewares/auth")
const User= require("../models/User")



const register = async(req,res) =>{
try {
    const payload = req.body
    const userExists = await User.findOne({email:payload.email})

    if (userExists){
       return res.status(403).json({message: "User already exist"})
    }

    const clientCreated = await User.create(payload)
    console.log("User Created")
    res.status(200).json({
        message:"User Created",
        clientCreated
    })
} catch (e) {
    res.status(400).json({message: e.message})
}
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    
    verify_data_user(req, res, async () => {
     
      const userFounded = req.user; //user  en req.user

      res.status(200).json({
        message: "Logged!",
        token: req.token, 
        user: {
          email: req.user.email,
          id: req.user._id
        }
      });
    });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
const authenticated = async(req,res) =>{
    try {
        res.status(200).json({
            message:"Logged!",
        token:req.token,
        user:req.user})
        const {password,email} = req.body
        const userFounded = User.findOne({email:payload.email})
    
        if (userFounded){
           if (verifyPassword(password,userFounded.password)) {
            return    res.status(403).json({message: "User logged"})
           }else{
            return   res.status(403).json({message: "Wrong password"})
           }
        }    
else{
    return res.status(403).json({message: "User not founded"})
 
}             
    } catch (e) {
        res.status(400).json({message: e.message})
    }
} 
   
const sign_out = async(req,res) =>{
    try {
        res.status(200).json({
            message:"Logged OUT!",
        token:req.token
} )            
    } catch (e) {
        res.status(500).json({message: e.message})
    }
} 



module.exports = {register,login,authenticated,sign_out,}