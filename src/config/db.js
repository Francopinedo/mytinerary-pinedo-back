const mongoose = require('mongoose');
const URL = "mongodb+srv://admin:admin@mytinerary.wpl8alv.mongodb.net/?retryWrites=true&w=majority"

const conectDB = () => {
    mongoose.connect(URL)
    .then(()=>{
        console.log("Connect success to database")
    })
    .catch(()=>{
        console.log("Error")
    })
}

module.exports = conectDB
