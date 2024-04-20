const mongoose=require('mongoose');
const UserModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },// this message is a part of which chat
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true,
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
},
{
    timestamps:true
})
module.exports=mongoose.model("UserModel",UserModel);