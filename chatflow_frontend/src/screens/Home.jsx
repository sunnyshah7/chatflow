import React,{useMemo,useState} from "react";
import {LogOut,MessageCirclePlus,MoreHorizontal,Search,Settings,Users} from "lucide-react";
import Avatar from "../components/Avatar";

const chats=[
{id:1,name:"Priya Sharma",letter:"P",type:"direct",online:true,preview:"Can you review the API design?",time:"10:42 AM",unread:2},
{id:2,name:"Backend Team",letter:"B",type:"group",online:false,preview:"Amit: Kafka consumer is ready.",time:"9:18 AM",unread:5},
{id:3,name:"Amit Verma",letter:"A",type:"direct",online:false,preview:"Sounds good. Let's sync later.",time:"Yesterday",unread:0},
{id:4,name:"Random",letter:"R",type:"group",online:false,preview:"Neha: Anyone up for lunch?",time:"Mon",unread:0}
];

export default function Home({onOpenChat,onNotifications,onSettings,onSignOut}) {
 const [q,setQ]=useState("");
 const filtered=useMemo(()=>chats.filter(c=>c.name.toLowerCase().includes(q.toLowerCase())),[q]);
 return <div className="app-shell"><aside className="sidebar">
   <div className="sidebar-brand"><div className="brand-icon small"><MessageCirclePlus size={19}/></div><span>ChatFlow</span></div>
   <div className="profile-mini"><Avatar letter="R" online/><div><strong>Rahul</strong><span>Online</span></div><button className="icon-button"><MoreHorizontal size={18}/></button></div>
   <div className="search-box"><Search size={17}/><input placeholder="Search conversations" value={q} onChange={e=>setQ(e.target.value)}/></div>
   <div className="sidebar-tabs"><button className="active">Chats</button><button onClick={onNotifications}>Notifications</button></div>
   <div className="conversation-list">{filtered.map(c=><button className="conversation" key={c.id} onClick={()=>onOpenChat(c)}>
     <Avatar letter={c.letter} online={c.online}/><div className="conversation-body"><div className="conversation-top"><strong>{c.name}</strong><span>{c.time}</span></div><div className="conversation-bottom"><span>{c.preview}</span>{c.unread>0&&<b>{c.unread}</b>}</div></div>
   </button>)}</div>
   <div className="sidebar-footer"><button onClick={onSettings}><Settings size={18}/> Settings</button><button onClick={onSignOut}><LogOut size={18}/> Sign out</button></div>
 </aside><main className="empty-main"><div className="empty-card"><div className="empty-icon"><Users size={30}/></div><h2>Your conversations</h2><p>Select a chat from the left to start messaging, or create a new conversation.</p><button className="primary-button compact"><MessageCirclePlus size={17}/> New conversation</button></div></main></div>;
}