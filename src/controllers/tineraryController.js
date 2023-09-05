const City = require("../models/City");
const Tinerary = require("../models/Itineraries");



const addTinerary = async (req,res) => {
 try {
    let {id}= req.query
    console.log(id);

    let cityfounded = await City.findById(id)  
    let newTinerary =  await Tinerary.create({
         name:"a",
        info: "a",
        duration: "a",
        price:"a",
        tags:"a",
        _city:cityfounded
      })

      await  cityfounded.updateOne({itineraries:[...cityfounded.itineraries,newTinerary]})
      let cityUpdated = await City.findById(id).populate('itineraries')  

    res.status(200).json({
        "message": "Tinerary added",
        "name": cityUpdated
    })
 } catch (error) {
    res.status(500).json({message:error })
 }
}


    module.exports = {addTinerary}