const bcrypt = require('bcrypt')
const { response } = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const {Strategy,ExtractJwt} = require('passport-jwt')

const passportVerify = passport.use(
    new Strategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "claveSuperSecreta"
    }, async (payload, done) => {
      try {
        let userFounded = await User.findOne({ email: payload.email })
        if (userFounded) {
          return done(null, userFounded)
        } else {
          return done(null)
        }
      } catch (error) {
        return done(error)
      }
    })
  )


const hashPassword = (req,res,next) =>{
    try {
    const passwordPlain = req.body.password
    const hashPassword =  bcrypt.hashSync(passwordPlain,10)
    req.body.password = hashPassword
    next()
    } catch (error) {
        return  res.status(500).json({error:error})
    }
}

const verifyPassword = async (passwordPlain, hashPassword) => {
   
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isValid = await bcrypt.compare(passwordPlain, hashPassword);
  return   isValid
      
    } catch (error) {
      console.error(error);
  };}

const verifyUserExist = async(req,res,next) =>{
    const {password,email} = req.body;
    const userFounded = await User.findOne({email:email})

   if (userFounded){
    req.user = userFounded; 
    res.status(200).json({ message: 'USER FOUNDED '+userFounded });
    next()
   }else{
    res.status(400).json({message:"user not founded"})
   }

}

const generateToken = (req, res, next) => {
    try {
      let secretkey = "claveSuperSecreta";
      let token = jwt.sign({ email: req.body.email }, secretkey, { expiresIn: 60 * 3 });
      req.token = token; 
      res.status(200).json({ message: 'TOKEN  '+token });
      next();
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  }

module.exports = {hashPassword,verifyPassword,verifyUserExist,generateToken,passportVerify}