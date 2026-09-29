import React,{useState} from "react";
import {ArrowLeft,Eye,EyeOff,LockKeyhole,Mail,UserRound,Upload} from "lucide-react";

export default function Signup({onBack,onCreated}) {
  const [show,setShow]=useState(false),[show2,setShow2]=useState(false);
  const [f,setF]=useState({name:"",email:"",password:"",confirm:"",terms:false});
  const u=(k,v)=>setF(x=>({...x,[k]:v}));
  return <div className="auth-page"><div className="auth-card signup-card">
    <button className="back-button" onClick={onBack}><ArrowLeft size={18}/> Back to login</button>
    <div className="auth-heading"><h2>Create your account</h2><p>Set up your ChatFlow profile in a few seconds.</p></div>
    <div className="avatar-upload"><div className="upload-avatar">R</div><button className="upload-button"><Upload size={16}/> Upload photo</button></div>
    <form className="form-stack" onSubmit={e=>{e.preventDefault();if(f.password!==f.confirm)return alert("Passwords do not match.");if(!f.terms)return alert("Please accept the terms and privacy policy.");onCreated();}}>
      <label>Full name</label><div className="input-wrap"><UserRound size={18}/><input value={f.name} onChange={e=>u("name",e.target.value)} placeholder="Your name" required/></div>
      <label>Email</label><div className="input-wrap"><Mail size={18}/><input type="email" value={f.email} onChange={e=>u("email",e.target.value)} placeholder="you@example.com" required/></div>
      <label>Password</label><div className="input-wrap"><LockKeyhole size={18}/><input minLength={8} type={show?"text":"password"} value={f.password} onChange={e=>u("password",e.target.value)} placeholder="At least 8 characters" required/><button type="button" className="icon-button" onClick={()=>setShow(!show)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div>
      <label>Confirm password</label><div className="input-wrap"><LockKeyhole size={18}/><input type={show2?"text":"password"} value={f.confirm} onChange={e=>u("confirm",e.target.value)} placeholder="Repeat your password" required/><button type="button" className="icon-button" onClick={()=>setShow2(!show2)}>{show2?<EyeOff size={18}/>:<Eye size={18}/>}</button></div>
      <label className="checkbox-row terms"><input type="checkbox" checked={f.terms} onChange={e=>u("terms",e.target.checked)}/><span>I agree to the Terms of Service and Privacy Policy.</span></label>
      <button className="primary-button">Create account</button>
    </form>
  </div></div>;
}