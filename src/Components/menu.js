import React from 'react';
import './menu.css';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import s1 from './home/sections/slider_img/1.png'
import s2 from './home/sections/slider_img/2.png'
import s3 from './home/sections/slider_img/3.png'
import s4 from './home/sections/slider_img/4.png'
import s5 from './home/sections/slider_img/5.png'
import s6 from './home/sections/slider_img/6.png'
import s7 from './home/sections/slider_img/7.png'
import s8 from './home/sections/slider_img/8.png'
import s9 from './home/sections/slider_img/9.png'
import s10 from './home/sections/slider_img/10.png'






function Menu() {

  return (

    <div className="part10">
         <div class="col-12 text-center layout1">
            <h1>Our Menu</h1>

        </div>
  	<div className="menu" id="menu">

   
    
      
       
         <Container>

        



<Row className="justify-content-center p-3">
        <Col md={12}>
         
     <Row className="p-5 ">




                  <CardGroup className="text-center" >


                     
                      <Card >

                        <Card.Body>
                        <Card.Img className="img-fluid" src={s1} />
                          <Card.Title>Big Mac Burger</Card.Title>
                         

                        </Card.Body>
                      

                       
                     </Card>


                      <Card >
                      
                       
                        <Card.Body>
                        <Card.Img className="img-fluid" src={s2} />
                          <Card.Title>Banana Pancakes</Card.Title>
                        
                        </Card.Body>
                       
                     </Card>


                        <Card >
                      
                       
                        <Card.Body>
                        <Card.Img className="img-fluid" src={s3} />
                          <Card.Title>Fresh Farm Pizza</Card.Title>
                         

                        </Card.Body>
                       
                     </Card>


                   


                       

                  

                      
                    </CardGroup>
                    </Row>



                     <Row className="p-5">



                  <CardGroup className="text-center">
                      <Card >
                      
                        <Card.Body>
                        <Card.Img className="img-fluid" src={s6} />
                          <Card.Title>Avacado Sandwich</Card.Title>
                        
                        </Card.Body>
                       
                      </Card>
                       <Card>
                        
                      
                        <Card.Body>
                        <Card.Img className="img-fluid" src={s7} />
                          <Card.Title>Pasta Italiano</Card.Title>
                         

                        </Card.Body>
                       
                      </Card>
                       <Card>
                        
                       
                        <Card.Body>
                        <Card.Img className="img-fluid" src={s8} />
                          <Card.Title>Shrimp Curry</Card.Title>
                          
                        </Card.Body>
                       
                      </Card>
                      
                      
                    </CardGroup>
                    </Row>


</Col>


      </Row>
             </Container>
        }

 </div>



      
  	
	 </div>



 
    
   

  );

  
}


export default Menu;