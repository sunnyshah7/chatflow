import React,{useState} from "react";
import {ArrowLeft,Bell,ChevronRight,Lock,ShieldCheck,Smartphone} from "lucide-react";
import Avatar from "../components/Avatar";

export default function Settings({onBack,onSignOut}){
 const [a,setA]=useState(true),[b,setB]=useState(true),[c,setC]=useState(false);
 return <div className="full-page"><header className="page-header"><button className="icon-button" onClick={onBack}><ArrowLeft size={20}/></button><div><h2>Settings</h2><p>Manage your profile, notifications and security.</p></div></header><main className="page-content settings-grid">
  <section className="section-card profile-card"><Avatar letter="R" size="large" online/><div><h3>Rahul</h3><p>rahul@example.com</p><button className="text-button">Edit profile</button></div></section>
  <section className="section-card"><h3>Notifications</h3><Toggle icon={<Bell size={18}/>} title="Push notifications" desc="Receive notifications for new messages." value={a} setValue={setA}/><Toggle title="Message sounds" desc="Play a sound when a new message arrives." value={b} setValue={setB}/><Toggle title="Desktop notifications" desc="Show notifications on your desktop." value={c} setValue={setC}/></section>
  <section className="section-card"><h3>Privacy & security</h3><Row icon={<Lock size={18}/>} title="Privacy"/><Row icon={<ShieldCheck size={18}/>} title="Security"/><Row icon={<Smartphone size={18}/>} title="Active sessions"/></section>
  <section className="section-card danger-card"><h3>Account</h3><button className="danger-button" onClick={onSignOut}>Sign out</button></section>
 </main></div>;
}
function Toggle({icon,title,desc,value,setValue}){return <div className="setting-row"><div className="setting-leading">{icon}</div><div className="setting-copy"><strong>{title}</strong><span>{desc}</span></div><button className={`toggle ${value?"on":""}`} onClick={()=>setValue(!value)}><i/></button></div>}
function Row({icon,title}){return <button className="settings-row-button"><span className="setting-leading">{icon}</span><strong>{title}</strong><ChevronRight size={18}/></button>}
