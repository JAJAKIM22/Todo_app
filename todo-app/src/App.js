import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Homepage from "./Homepage";
import Funpage from "./Funpage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  
  return (
    <div className="app">
      <Router>
       <Routes>
         <Route exact path="/login" element={<Login/>}></Route>
         <Route exact path="/dashboard" element={<Dashboard/>}></Route>
         <Route exact path="/homepage" element={<Homepage/>}></Route>
         <Route exact path="/funpage" element={<Funpage/>}></Route>
       </Routes>
      </Router>  
    </div>
    
  );
  }

export default App;