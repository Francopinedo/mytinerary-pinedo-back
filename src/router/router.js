const express = require('express') ;
const router = express.Router();
const{getCity,getCities,addCity,deleteCity,updateCityImages} = require('../controllers/citiesController')
const{addTinerary, getTineraries, deleteItineraryById, modifyTinerary, getTineraryById,getTineraryByCity} = require('../controllers/tineraryController')
const {verifyDataCity} = require ('../middlewares/verifications');
const authRouter = require('./auth');

//Cities
router.get("/cities", getCities)
router.get("/city/:id",getCity)
router.post("/cities",verifyDataCity, addCity)
router.delete("/cities", deleteCity)
router.post('/actualizar-imagenes-ciudades', updateCityImages);

//Itineraries
//Show city with tinerary
router.get('/city/itinerary/:id', getTineraryByCity);
//Add
router.post("/itineraries", addTinerary)
//Show
router.get('/itineraries', getTineraries);
//Delete by id
router.delete("/itineraries", deleteItineraryById)
//show by id
router.get('/itineraries/:id', getTineraryById)
//modify
router.put('/itineraries/:id', modifyTinerary)

//User
router.use("/user",authRouter)

module.exports = router