import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

 function Login(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function SubmitButton(){
    if (email && password){
      return <button type="button">SIGNUP</button>
    } else {
      return <button type="button" disabled>SIGNUP</button>
    };
  };

  return(
    <div>
    <div  class="mb-3">
      <input value={email} onChange={ e => setEmail(e.target.value)} placeholder="email"/>
      <input value={password} onChange={ e => setPassword(e.target.value)} placeholder="password"/>
      <button 
      onClick={() => {
        navigate("/dashboard");
    }}>
      <SubmitButton/> </button>
    </div>
    </div>
  );
}
 export default Login;
