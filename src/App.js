import React from 'react';


import './App.css';
import Home from'./Components/home/home.js';
import Menu from'./Components/menu.js';
import About from'./Components/about/about.js';
import Header from './Components/header/Header.js'

import Welcome from './Components/Welcome.js'

import Offers from './Components/Offers.js'
import Restaurant from './Components/Restaurants.js'
import Careers from './Components/Careers.js'
import Rewards from './Components/Rewards.js'


import Footer from './Components/footer/Footer.js'

import 'bootstrap/dist/css/bootstrap.min.css';

import image from "./img/fp_logo.png";

import { 
    BrowserRouter as Router, 
    Route, 
    Routes,
    Link
} from 'react-router-dom';



function App() {
  return (

  <Router> 

        
          <Header image={image}/>
     
          
          
           <Routes>            
            <Route exact path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu />}/>

            <Route path="/offers" element={<Offers />}/>
            <Route path="/restaurant" element={<Restaurant />}/>
            <Route path="/careers" element={<Careers />}/>
            <Route path="/reward" element={<Rewards />}/>

            <Route path="/about" element={<About/>}/>       
           </Routes>



          <Footer />

          
          <Welcome name="FUDO."/>

  </Router> 

    

  );
}

export default App;
