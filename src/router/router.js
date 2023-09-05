const express = require('express') ;
const router = express.Router();
const{getCity,getCities,addCity,deleteCity,updateCityImages} = require('../controllers/citiesController')
const{addTinerary} = require('../controllers/tineraryController')
const {verifyDataCity} = require ('../middlewares/verifications')


router.get("/cities", getCities)
router.get("/city/:id",getCity)
router.post("/cities",verifyDataCity, addCity)
router.delete("/cities", deleteCity)
router.post("/itineraries", addTinerary)


//router.get('/city/:id', cityController.getCityById);


// Define la ruta para actualizar las imágenes de las ciudades
router.post('/actualizar-imagenes-ciudades', updateCityImages);


module.exports = router