const mongoose=require('mongoose');
const MessageModel=new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel"
    },
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ChatModel"
    },// this message is a part of which chat
    content:{
        type:String,
        trim:true
    }
},
{
    timestamps:true
})
module.exports=mongoose.model("MessageModel",MessageModel);