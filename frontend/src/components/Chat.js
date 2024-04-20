import React  from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
const Chat = () => {
    const {userId} =useParams();
    const [chats, setChats]=useState([]);
   const getChats=async()=>{
    let data=await fetch("http://localhost:4000/chat");
    data = await data.json();
    console.warn("get chats",data);
    setChats(data);
    
  //  
   }
  useEffect(() => {
    getChats();
   
}, []);
 // Move the mapping and logging outside the getChats function
 useEffect(() => {
  // Logs will show the updated state after it's been set
  console.warn("after updsting",chats);
  chats.map((item, index) => (
      console.warn(item.chatName)
  ));
}, [chats]); // Add chats as a dependency

    
    //setChat(res);
    return (
      <div>
          <div>chaat</div>
          {
            chats.map((item) => (
    <div key={item._id}>
        {item.chatName}
    </div>
))
          }
      </div>
  );
}

export default Chat