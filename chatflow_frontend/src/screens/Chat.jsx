import React,{useState} from "react";
import {ArrowLeft,Check,CheckCheck,MoreVertical,Paperclip,Phone,Send,Smile,Video} from "lucide-react";
import Avatar from "../components/Avatar";

export default function Chat({chat,onBack}) {
 const [draft,setDraft]=useState("");
 const [messages,setMessages]=useState([
  {id:1,sender:"Priya",text:"Hey Rahul! Did you get a chance to look at the notification flow?",time:"10:31 AM",mine:false,read:true},
  {id:2,sender:"You",text:"Yes. I think the event-driven approach makes sense for this project.",time:"10:33 AM",mine:true,read:true},
  {id:3,sender:"Priya",text:"Great. Can you review the API design too?",time:"10:42 AM",mine:false,read:true}
 ]);
 const group=chat?.type==="group";
 const send=e=>{e.preventDefault();if(!draft.trim())return;setMessages(m=>[...m,{id:Date.now(),sender:"You",text:draft.trim(),time:"Just now",mine:true,read:false}]);setDraft("");};
 return <div className="chat-page"><header className="chat-header"><button className="icon-button mobile-back" onClick={onBack}><ArrowLeft size={21}/></button><Avatar letter={chat?.letter||"P"} online={chat?.online}/><div className="chat-header-info"><strong>{chat?.name||"Chat"}</strong><span>{group?"12 members":chat?.online?"Online":"Last seen recently"}</span></div><div className="chat-actions"><button className="icon-button"><Phone size={19}/></button><button className="icon-button"><Video size={19}/></button><button className="icon-button"><MoreVertical size={19}/></button></div></header>
 <section className="message-area"><div className="message-date">Today</div>{messages.map(m=><div className={`message-row ${m.mine?"mine":""}`} key={m.id}>{!m.mine&&group&&<Avatar letter={m.sender[0]} size="small"/>}<div className="message-bubble">{!m.mine&&group&&<small>{m.sender}</small>}<p>{m.text}</p><div className="message-meta"><span>{m.time}</span>{m.mine&&(m.read?<CheckCheck size={14}/>:<Check size={14}/>)}</div></div></div>)}<div className="typing-row"><span className="typing-dots"><i/><i/><i/></span>{chat?.name||"User"} is typing...</div></section>
 <form className="composer" onSubmit={send}><button type="button" className="icon-button"><Smile size={21}/></button><button type="button" className="icon-button"><Paperclip size={20}/></button><input value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Write a message..."/><button className="send-button"><Send size={19}/></button></form></div>;
}