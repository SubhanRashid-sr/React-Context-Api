import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const hanbleSubmitt = (e) => {
    e.preventDefault()
    setUser({username,password})
  };
  return (
    <div style={{textAlign:'center',display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center',margin:10}}>
      <h1 style={{textAlign:'center', fontFamily:'monospace',fontSize: 18, margin:12}}>Login</h1>
      <input
      style={{border:'1px solid black',padding:4,marginBottom:10}}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      style={{border:'1px solid black',padding:4,marginBottom:10}}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={hanbleSubmitt}
      style={{textAlign:'center', fontFamily:'monospace',fontSize: 16, margin:12,border:'2px solid grey', padding:6, borderRadius:4}}
      >Submmit</button>
    </div>
  );
};

export default Login;
