import React from 'react';

import logo from './logo.svg';
import './App.css';
import Home from'./home';
import Gallery from'./gallery';
import Navbar from './Navbar.js'
import BasicExample from './BasicExample.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    BrowserRouter as Router, 
    Route, 
    Routes,
    Link
} from 'react-router-dom';



function App() {
  return (

  <Router> 
          <Navbar />
          
           <Routes>            
            <Route exact path="/" element={<Home/>}/>
            <Route path="/gallery" element={<Gallery/>}/>          
           </Routes>

  </Router> 

    

  );
}

export default App;
