
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

module.exports={verifyDataCity}