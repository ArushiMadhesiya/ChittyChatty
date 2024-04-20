const mongoose =require('mongoose');
const ChatModel=new mongoose.Schema({
    chatName:{Type: String, Trim: true},
    isGroup:{Type: Boolean, default: false},
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"UserModel"
        }
    ],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"MessageModel"
    },
    groupAdmin: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel"
    },
    
},
{
    timestamps:true 
}
)
module.exports=mongoose.model("ChatModel",ChatModel);