import React from 'react';
import './home.css';

import {useState} from "react";



import Products from './sections/Products.js';

import TabsOfCat from './sections/TabsOfCat.js';






import Image from 'react-bootstrap/Image'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';


import home_img from './img/home_img.png'
import people from './img/people.png'



import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';







function Home() {

    const [count, setCount] = useState(0);

    

  return (


  	<div className="home" id="home">

    

    <div className="part">

    <Container>

    <Row className="justify-content-center">

   



   
                                       

                                          <Row className="custom_row">
                                              <Col md={6}> 

                                             
                                             <h1>GET DELICIOUS FOOD AT YOUR DOORSTEPS</h1>
                                             <br/>
                                             <p>Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
                                               </p>



                                                <Button className="btn1">Order Now</Button> 
                                       


                                              </Col>
                                              <Col md={6} className="custom_img_place">


                                                 <Card className="brd1">
                                                 <Card.Img src={home_img} />
                                            
                        
                        
                                                 </Card>



                                           </Col>
                                          </Row>
                                          
                                         
                                          
                                     

                                       


                                         





                                       
                                     

                                      </Row> 
    </Container>                                    
       </div>

   
    
  <div className="part2">
         <Container>

         <div class="col-12 m-3 text-center ">
            <h3>Choose from your favourite category</h3>

        </div>
         
       <TabsOfCat />

          
          

      

             </Container>

 </div>
 

 <div className="part3">
         <Container>
         <div class="col-12 m-3 text-center">
            <h3>Restaurants Near You</h3>

        </div>

        
         
     <Products />

          
          

      

             </Container>

 </div>

 <div className="part4">
         <Container>

        
         
     <div class="col-12 text-center p-5">
            <h3>What Our Customers Say About Us</h3>

        </div>

        <Row className="justify-content-center">
       <Col md={12}>


       <Row className="justify-content-center align-items-center">
         <Col xs={12} md={5}>
              
                <img className="photo2 img-fluid" src={people} />
      
              </Col>
  <Col xs={12} md={6} >
        <Card>
         
      <Card.Body className="opinion">
      <h4>Why Choose Us?</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies nam dui mattis placerat fusce gravida diam fermentum. Sit sodales adipiscing rhoncus cras quam vel nam. 
Curabitur pellentesque vitae amet, massa venenatis neque, netus nunc. Sapien vitae dolor quis quam neque facilisi sagittis, malesuada fermentum.
</p>
</Card.Body>
    </Card>
    </Col>
  


</Row>
</Col>

</Row>
        


             </Container>

 </div>




</div>
  	

  );

  
}


export default Home;