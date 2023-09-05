const City = require("../models/City")



const getCities = async (req, res) => {
   try {
     let cities = await City.find().populate('itineraries')
     res.json(cities); 
   } catch (err) {
     res.json({ message: err.message });
   }
 }


const getCity = async (req, res) => {
   try {
     const city = await City.findById(req.params.id);
     if (!city) {
       return res.status(404).json({ message: 'Ciudad no encontrada' });
     }
     return res.status(200).json(city);
   } catch (error) {
     return res.status(500).json({ error: 'Error al obtener detalles de la ciudad' });
   }
 };
       
const addCity = async (req,res) => {
 try {
    let payload= req.body
    console.log(payload);

    let cityCreated = await City.create(payload)  

    res.status(201).json({
        "message": "City added",
        "city": payload
    })
 } catch (error) {
    res.status(500).json({message:error })
 }
}

const deleteCity = async (req,res) => {
    try {
       let {id}= req.query
       console.log(id);

        await City.deleteOne({_id: id })
      
   
       res.status(201).json({
           "message": "City deleted",
           "city": id
       })
    } catch (error) {
       res.status(500).json({message:error })
    }
   }


   const updateCityImages = async (req, res) => {
      try {
      
        await City.updateMany({}, { img: './x.jpg' });
        
        return res.status(200).json({ message: 'y' });
      } catch (error) {
        return res.status(500).json({ error: 'n' });
      }
    };

    module.exports = {getCity,getCities,addCity,deleteCity,updateCityImages}