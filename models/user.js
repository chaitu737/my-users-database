const mongoose = require('mongoose');

const Schema = mongoose.Schema;





const userSchema = new Schema({
    name:{
        type:String
    },

    mobile:{
        type:String, unique:true
    },

    email:{
        type:String
    },

    address:{

        street:String,
        locality:String,
        city:String,
        state:String,
        pincode:String

    },

geometry:{
    "type":{
        "type":String
    },
    "coordinates":{
        "type":[Number],
        "index":"2dsphere"
    }
}



}, {
    timestamps:true
});


const User = mongoose.model('user', userSchema);

module.exports=User