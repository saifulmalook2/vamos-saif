import React from 'react';
//import { Route } from 'react-router';
import './App.css';
import Navbar from './components/inc/Navbar.js'
import AboutUs from './components/pages/AboutUs.js';
import Login from './components/pages/Login.js';
import Register from './components/pages/Register.js';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
      <div>
      <Navbar />

      <Routes>
      <Route exact path = "/" element={<AboutUs/>}/>
        
     

      <Route path = "/login"element={<Login/>}/>
        

      <Route path = "/register"element={<Register/>}/>
        

      </Routes>
      
      
            
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;
