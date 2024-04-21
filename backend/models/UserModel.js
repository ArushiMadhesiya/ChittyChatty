const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');
const UserModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },// this message is a part of which chat
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
},
{
    timestamps:true
})
UserModel.methods.pwMatches=async function(enteredPw){
    return await bcryptjs.compare(enteredPw,this.password);
}
UserModel.pre('save',async function (next) {
    if(!this.isModified){
        next()
    }
    else{
        const salt=await bcryptjs.genSalt(10);
        this.password=await bcryptjs.hash(this.password,salt);
    }
})
module.exports=mongoose.model("UserModel",UserModel);