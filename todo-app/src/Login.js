import React from "react";
import { useNavigate } from 'react-router-dom';

 function Login(){
  const navigate = useNavigate();

  return(
    <div>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="password" />
      <button 
      onClick={() => {
        navigate("/dashboard");
    }}>
      Signup </button>
    </div>

  );
}
 export default Login;
