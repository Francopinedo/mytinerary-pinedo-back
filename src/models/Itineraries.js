const {Schema,model,Types} = require('mongoose');
const City = require('./City');

const schemaTinerary = new Schema({
    name:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:false
    },
    tags:{
        type:String,
        required:false
    }
    ,
    _city:{
        type: Types.ObjectId, ref:"City" ,
        required:false
    }
})

const Tinerary = model("Tinerary",schemaTinerary)

module.exports = Tinerary;