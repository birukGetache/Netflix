const mongoose= require('mongoose');
const Schema=mongoose.Schema;
const Vedioschema= new Schema({
    username:String,
    password:String
})
module.exports= mongoose.model("Vedios",Vedioschema);