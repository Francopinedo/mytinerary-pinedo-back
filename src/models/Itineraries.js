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
        required:true
    },
    price:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:false
    },
    likes:{
        type:String,
        required:false
    },
    imgUser:{
        type:String,
        required:false
    },
    nameUser:{
        type:String,
        required:true
    },
    _city:{
        type: Types.ObjectId, ref:"City" ,
        required:false
    }
})

const Tinerary = model("Tinerary",schemaTinerary)

module.exports = Tinerary;