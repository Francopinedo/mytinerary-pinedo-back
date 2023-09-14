const {Schema,model,Types} = require('mongoose')

const schemaUser = new Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:true
    }

})

const User = model("User",schemaCity)

module.exports = User;