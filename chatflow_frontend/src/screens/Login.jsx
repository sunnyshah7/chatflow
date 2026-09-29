import React,{useState} from "react";
import {Eye,EyeOff,LockKeyhole,Mail,MessageCircle} from "lucide-react";

export default function Login({onLogin,onSignup}) {
  const [show,setShow]=useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  return <div className="auth-page"><div className="auth-card">
    <div className="brand-lockup"><div className="brand-icon"><MessageCircle size={24}/></div><div><h1>ChatFlow</h1><p>Real-time conversations, built to scale.</p></div></div>
    <div className="auth-heading"><h2>Welcome back</h2><p>Sign in to continue to your conversations.</p></div>
    <form className="form-stack" onSubmit={e=>{e.preventDefault();onLogin();}}>
      <label>Email</label><div className="input-wrap"><Mail size={18}/><input type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} required/></div>
      <label>Password</label><div className="input-wrap"><LockKeyhole size={18}/><input type={show?"text":"password"} placeholder="Enter your password" value={password} onChange={e=>setPassword(e.target.value)} required/><button type="button" className="icon-button" onClick={()=>setShow(!show)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div>
      <div className="form-row between"><label className="checkbox-row"><input type="checkbox"/> Remember me</label><button type="button" className="text-button">Forgot password?</button></div>
      <button className="primary-button">Sign in</button>
    </form>
    <div className="divider"><span>or</span></div>
    <button className="secondary-button">Continue with Google</button>
    <p className="auth-footer">Don't have an account? <button className="text-button" onClick={onSignup}>Create one</button></p>
  </div></div>;
}