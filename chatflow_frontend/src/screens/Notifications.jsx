import React from "react";
import {ArrowLeft,AtSign,BellRing,LogIn,MessageCircleHeart} from "lucide-react";

const items=[
["AtSign","Priya mentioned you","Can you review the API design?","12 min ago",true],
["MessageCircleHeart","Amit reacted to your message","Sounds good. Let's sync later.","1 hour ago",true],
["BellRing","Missed call","You missed a call from Backend Team.","Yesterday",false],
["LogIn","New login","A new browser session was detected.","Yesterday",false]
];

export default function Notifications({onBack}){return <div className="full-page"><header className="page-header"><button className="icon-button" onClick={onBack}><ArrowLeft size={20}/></button><div><h2>Notifications</h2><p>Stay up to date with your conversations.</p></div></header><main className="page-content narrow"><div className="section-card"><div className="section-title-row"><h3>Recent activity</h3><button className="text-button">Mark all as read</button></div>{items.map(([icon,title,text,time,unread],i)=>{const Icon={AtSign,MessageCircleHeart,BellRing,LogIn}[icon];return <div className={`notification-item ${unread?"unread":""}`} key={i}><div className="notification-icon"><Icon size={19}/></div><div className="notification-body"><strong>{title}</strong><p>{text}</p><span>{time}</span></div>{unread&&<span className="unread-dot"/>}</div>})}</div></main></div>}
