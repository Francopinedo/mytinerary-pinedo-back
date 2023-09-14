const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().required(),
  lastname:Joi.string().required(),
  email:Joi.string().email().min(4).max(20).required(),
  password: Joi.string().required().alphanum().min(6).max(20).required(),


})

const verifyDataCity = (req,res,next) =>{

let {name ,info ,img} = req.body 
if (!name || !info || !img ){
  return  res.status(400).json({message:"NO data"})
}
if (name==""){
  return  res.status(400).json({message:"NO name"})
}
next()
}



const verifyAuthData = (req,res,next) =>{
const payload = req.body
const userValidated= userSchema.validate(payload,{abortEarly:false})
if (userValidated.error) {
  return res.status(400).json({message:userValidated.error.details.map((err)=>err.message)})
  next()
}
}



module.exports={verifyDataCity,verifyAuthData}