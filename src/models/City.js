const {Schema,model,Types} = require('mongoose')

const schemaCity = new Schema({
    name:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    itineraries: [{
        type: Types.ObjectId,
        ref: "Tinerary"
    }]
})

const City = model("City",schemaCity)

module.exports = City;