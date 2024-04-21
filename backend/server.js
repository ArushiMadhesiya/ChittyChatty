const express=require('express');
const dotenv=require('dotenv');
const chats= require('./chats')
const cors = require("cors");
const UserRoutes=require('./routes/UserRoutes');
require('./config/db');
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
// apis
app.get('/', (req,res)=>{
  res.send("runnnning");
})
app.use('/api/user',UserRoutes);
// sendig all chats
app.get('/chat', (req,res)=>{
  res.send(chats);
})
// display chat of specific id
app.get('/chat/:id',(req,res)=>{
  const id=req.params.id;
  const results=chats.find((c)=>c._id==id);
  console.warn("chat with this id is ",results);
  res.send(results);
})
const PORT=process.env.PORT || 5000;
app.listen(PORT,(err)=>{
  if(err){
    console.warn("errr");
  }
    else console.warn("listening na",PORT);
})