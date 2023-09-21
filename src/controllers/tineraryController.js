const City = require("../models/City");
const Tinerary = require("../models/Itineraries");


const getTineraries = async (req,res) => { 
   try {
   const itineraries = await Tinerary.find(req.params.id);
   res.status(200).json(itineraries);
 } catch (error) {
   res.status(500).json({ message: error.message });
 }
}

const getTineraryByCity = async (req, res) => {
  try {
    const cityId = req.params.id; 

    const city = await City.findById(cityId).populate('itineraries');

    if (!city) {
      return res.status(404).json({ message: `City with ID ${cityId} not found` });
    }

    
    res.status(200).json(city.itineraries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
 };

 const getTineraryById = async (req, res) => { 
  try {
    const itineraryId = req.params.itineraryId;
    const itinerary = await Itinerary.findById(itineraryId); 
    
    if (!itinerary) {
      return res.status(404).json({ message: 'Itinerary not found' });
    }

    res.status(200).json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  const addTinerary = async (req,res) => {
   try {
      let {id}= req.query
      let cityfounded = await City.findById(id)  
      let newTinerary =  await Tinerary.create({
           name:"Wine Tasting",
          info: "Wine Tasting",
          duration: "3h",
          price:"$45",
          tags:"Wine Tasting",
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
  
  const modifyTinerary = async (req,res) => { 
   try {
      const itineraryId = req.params.itineraryId;
      const updatedData = req.body; 
      
     
      const itinerary = await Tinerary.findByIdAndUpdate(itineraryId, updatedData, { new: true });
      
      if (!itinerary) {
        return res.status(404).json({ message: 'Itinerary not found' });
      }
  
      res.status(200).json(itinerary);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

 const deleteItineraryById = async (req, res) => {
   try {
     const { itineraryId, cityId } = req.params;
 
     // Verifica si el itinerario existe en la ciudad
     const city = await City.findById(cityId);
     if (!city) {
       return res.status(404).json({ message: 'City not found' });
     }
 
     // Busca el itinerario por su ID y elimínalo
     const itinerary = await Itinerary.findById(itineraryId);
     if (!itinerary) {
       return res.status(404).json({ message: 'Itinerary not found' });
     }
 
     // Elimina el itinerario de la ciudad
     city.itineraries.pull(itineraryId);
     await city.save();
 
     // Elimina el itinerario de la base de datos
     await Itinerary.findByIdAndRemove(itineraryId);
 
     res.status(200).json({
       message: 'Itinerary deleted successfully',
       city: city,
     });
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
 };





 

 
    module.exports = {addTinerary,modifyTinerary,deleteItineraryById,getTineraries,getTineraryById,getTineraryByCity}