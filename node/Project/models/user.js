const mongoose=require('mongoose');
const usersSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    tel:String,
    email:String,
    password:String
})
module.exports=mongoose.model('Users',usersSchema);