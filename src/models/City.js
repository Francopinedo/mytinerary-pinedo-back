const {Schema,model} = require('mongoose')

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
        required:false
    }
})

const City = model("City",schemaCity)

module.exports = City;