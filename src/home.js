import React from 'react';
import './home.css';




import { render } from 'react-dom';
import Image from 'react-bootstrap/Image'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { faFacebookF,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';




import card_img5 from './pic2.png'
import pi1 from './pi1.png'
import pi2 from './pi2.png'
import pi3 from './pi3.png'
import pi4 from './pi4.png'

import fc1 from './fc1.png'
import fc2 from './fc2.png'
import fc3 from './fc3.png'

import si1 from './si1.png'
import si2 from './si2.png'
import si3 from './si3.png'


import pr1 from './pr1.png'
import pr2 from './pr2.png'
import pr3 from './pr3.png'
import pr4 from './pr4.png'
import pr5 from './pr5.png'
import pr6 from './pr6.png'



import img_new from './img_new.png'
import img_new2 from './img_new2.png'

import vector from './Vector.png'

import fm1 from './fm1.png'
import fm2 from './fm2.png'
import fm3 from './fm3.png'
import fm4 from './fm4.png'
import fm5 from './fm5.png'
import fm6 from './fm6.png'

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';







function Home() {

    

  return (


  	<div className="home" id="home">

    <div className="part">

    <Container>

    <Row className="justify-content-center">

    <Carousel>



   
                                         <Carousel.Item>

                                          <Row className="custom_row">
                                              <Col md={6}> 

                                              <Carousel.Caption className="custom_caption">
                                             <h3 class="font-weight-bold">New generation ceramic tile</h3>
                                             <p><small>Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
                                                </small></p>

                                                <Button variant="dark" className="btn1">LEARN MORE</Button> 
                                           </Carousel.Caption>


                                              </Col>
                                              <Col md={6} className="custom_img_place">


                                                 <Card className="brd1">
                                                 <Card.Img src={card_img5} />
                                            
                        
                        
                                                 </Card>



                                           </Col>
                                          </Row>
                                          
                                         
                                          
                                     

                                           
                                         </Carousel.Item>


                                         





                                       
                                      </Carousel>

                                      </Row> 
    </Container>                                    
       </div>

   
    
  <div className="part2">
         <Container>

         <div class="col-12 mt-1 title5">
            <h3>Featured Collection</h3>

        </div>
            <Row className="custom_row2">



                  <CardGroup>
                      <Card className="text-center" >
                        
                        <Card.Body className="layout2-1">
                        <Card.Img class="itm brd2" src={fc1} />
                          <Card.Title className="s2">Air Insulated Switchgear</Card.Title>
                        
                          <Card.Text>
                           Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.
                          </Card.Text>

                        
                          
                          
                    
                        </Card.Body>
                         <Card.Footer className="brd3">
                         <Button className="btn2">VIEW COLLECTION</Button>
                         </Card.Footer>
                          
                        
                     
                       
                      </Card>
                      <Card className="text-center">



                      
                     <Card.Body className="layout2-1">
                       <Card.Img class="itm brd2" src={fc2} />
                          <Card.Title className="s2">Mira Switches</Card.Title>
                        
                          <Card.Text>
                          Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.</Card.Text>
                         
                       

                         </Card.Body>

                          <Card.Footer className="brd3">
         <Button className="btn2">VIEW COLLECTION</Button>
        </Card.Footer>

                        
                        
                     
                       
                      </Card>

                      <Card className="text-center">
                       
                        <Card.Body className="layout2-1">
                          <Card.Img class="itm brd2" src={fc3} />
                          <Card.Title className="s2">Transformers & Package Substations</Card.Title>
                        
                          <Card.Text>
                           Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor.
                          </Card.Text>
                            
                        </Card.Body>

                         <Card.Footer className="brd3">
         <Button className="btn2">VIEW COLLECTION</Button>
        </Card.Footer>
                        
                   
                     
                      </Card>

                      
                    </CardGroup>
                    </Row>

             </Container>

 </div>


 <div className="part3" style={{ background: '#000000' }}>
         <Container >
            <Row className="justify-content-center">

         <div class="col-12 title6 m-3">
            <h3>Products</h3>

        </div>
              <Row>
                <Col xs={6} md={4} className="p-3"> 

                      <Card class="text-center overlay">
                    
                        <Card.Img className="img-fluid" src={pi1} />

                         <div class="card-img-overlay d-flex flex-column justify-content-end">
                           <Card.Title>Bedroom Tiles</Card.Title>                           
                           <Card.Text>Ante mus blandit sapien sociosqu per consequat ad.</Card.Text>
                         </div>
                          
                        
                      </Card>
                </Col>
                        
                <Col xs={12} md={8} className="p-3">


                        <Row>
                        <Col xs={6}>
                        <Card class="text-center">
                    
                                <Card.Img className="img-fluid" src={pi2} />

                                 <div class="card-img-overlay d-flex flex-column justify-content-end">
                                   <Card.Title>Bathroom Tiles</Card.Title>                           
                                   <Card.Text>Ante mus blandit sapien sociosqu per consequat ad.</Card.Text>
                                 </div>
                                  
                                
                              </Card>
                      </Col>
                        <Col xs={6}>
                        <Card class="text-center">
                    
                                <Card.Img src={pi4} />

                                 <div class="card-img-overlay d-flex flex-column justify-content-end">
                                   <Card.Title>Outdoor Tiles</Card.Title>                           
                                   <Card.Text>Ante mus blandit sapien sociosqu per consequat ad.</Card.Text>
                                 </div>
                                  
                                
                                  </Card>
                      </Col>
                        </Row>

                        <Row> 
                        <Col xs={12} md={12} className="p-3">
                        <Card class="text-center">
                    
                                <Card.Img className="img-fluid" src={pi3} />

                                 <div class="card-img-overlay d-flex flex-column justify-content-end">
                                   <Card.Title>Kitchen Tiles</Card.Title>                           
                                   <Card.Text>Ante mus blandit sapien sociosqu per consequat ad.</Card.Text>
                                 </div>
                                  
                                
                                  </Card>
                      </Col>
                      </Row>



                </Col>
              </Row>
              </Row>

             </Container>

 </div>
  		
  		
        

           
<div className="part4">
         <Container>

         <Row className="justify-content-center">
         <div class="col-12 col-lg-8">

         <div class="col-12 title5">
            <h3>Services</h3>

        </div>


        
         <div className="custom_row">
              <Row className="row_new">
              <Col xs={6}>
             
                  <img className="photo img-fluid p-2" src={si1} />
      
              </Col>

              <Col xs={6}>

                        <Card class="text-center justify-content-center">
                        <Card.Body className="layout3 p-2">
                          <Card.Title>Measurement Service</Card.Title>                           
                          <Card.Text>Our sales support team will come & measure your property in order to ensure accuracy in design and help you calculate how many tiles you need. Please call our toll free number 800 122 22 20 to arrange a visit, or visit one of our Showrooms.</Card.Text>
                       <Button className="btn2">LEARN MORE</Button>
                       </Card.Body>
                        </Card>


              </Col>
              </Row>



              <Row className="row_new">
              <Col xs={6}>


                  <Card class="text-center justify-content-center">
                        <Card.Body className="layout3 p-2">
                          <Card.Title>Product Advice</Card.Title>                           
                          <Card.Text>Consult our professionals by calling our toll free number 800 122 22 20 or by visiting one of our showrooms where our qualified sales team will offer you product advice highlighting the latest interior and exterior trends.
                          </Card.Text>
                       <Button className="btn2">LEARN MORE</Button>
                       </Card.Body>
                        
                          </Card>
              
               
      
              </Col>

              <Col xs={6}>

               <img className="photo img-fluid p-3" src={si2} />
                      
              </Col>
              </Row>


                <Row className="row_new">
              <Col xs={6}>
              
                <img className="photo img-fluid p-3" src={si3} />
      
              </Col>

              <Col xs={6}>
                          <Card class="text-center justify-content-center">
                        <Card.Body className="layout3 p-3">
                          <Card.Title>Interior Design</Card.Title>                           
                          <Card.Text>Benefit from our free interior design service. Our fully qualified interior designers will provide CAD visuals to help you visualise your selected tiles before you buy.

                          </Card.Text>
                       <Button className="btn2">LEARN MORE</Button>
                       </Card.Body>
                        
                          </Card>
              </Col>
              </Row>


            </div>
        </div>
     </Row>


           
           

    </Container>
 </div>

 {/* Part 3 ends*/}



{/* Part 6 ends*/}





<div className="part5 p-2">
         <Container>

         <Row className="justify-content-center">
         <div class="col-12 col-lg-8">

      

        
         <div className="custom_row">
             

                <Row className="row_new2">
              <Col xs={12} md={5}>
              
                <img className="photo2 img-fluid" src={img_new} />
      
              </Col>

              <Col xs={12} md={6}>
                          <Card class="text-center justify-content-center">
                        <Card.Body className="layout4">
                          <h3>Why Choose Us?</h3>              
                          <Card.Text>Neque quisque sollicitudin tempor vestibulum elit taciti. Sagittis tempor consequat turpis. Aenean curae elementum vestibulum dapibus vitae laoreet. Bibendum suspendisse himenaeos malesuada. Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant.

                          </Card.Text>

                          <Card.Text>Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant.

                       
                            </Card.Text>
                        <Card.Text>
                           <ul>
                            <li>SUSTAINABLY SOURCED</li>
                            <li>EASY TO RECYCLE</li>
                            <li>IMPROVED HOME RESALE VALUE</li>
                            <li>A SMART WAY TO LEED CERTIFICATION</li>
                          </ul>
                          </Card.Text>


                       <Button className="btn1">LEARN MORE</Button>
                       </Card.Body>
                        
                          </Card>
              </Col>
              </Row>


            </div>
        </div>
     </Row>


           
           

    </Container>
 </div>

{/* Part 6 ends*/}


<div className="part6 p-2" id="part10">
         <Container>

         <Row className="justify-content-center">
         <div class="col-12 col-lg-8">

      
   <div class="title7 m-3">
   <Row>
   <Col> <h3>Projects</h3></Col>
           <Col className="d-flex justify-content-end">
             <Button className="btn2">ALL PROJECTS</Button>
             </Col>
             </Row>

        </div>

        
       
             

                <Row className="p-2">
              <Col xs={4} md={4}>

            <div id="col_custom">
            
             <div id="col_custom1" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Aenean habitasse</h6>
                                <p>Riyadh, Saudi Arabia</p>
                                 
                                 </div>
                                  
                                
                              

             </div>
            
             
             </div>

                   
      
              </Col>

              <Col xs={4} md={4}>

               <div id="col_custom">
            
             
              
                <div id="col_custom2" class="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Aenean Tempus ipsum</h6>
                                <p>Riyadh, Saudi Arabia</p>
                                 
                                 </div>
                                  
                                
                              

             </div>

                </div>
              </Col>

              <Col xs={4} md={4}>
              
               <div id="col_custom">

                  <div id="col_custom3" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Aenean habitasse</h6>
                                <p>Riyadh, Saudi Arabia</p>
                                 
                                 </div>
                                  
                                
                              

             </div>
            
             
              
             

                </div>
      
              </Col>
              </Row>


{/* Row 2*/}


                   <Row className="p-2">
              <Col xs={4} md={4}>

            <div id="col_custom">
            
             <div id="col_custom4" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Aenean habitasse</h6>
                                <p>Riyadh, Saudi Arabia</p>
                                 
                                 </div>
                                  
                                
                              

             </div>
            
             
             </div>

                   
      
              </Col>

              <Col xs={4} md={4}>

               <div id="col_custom">
            
             
              
                <div id="col_custom5" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Aenean Tempus ipsum</h6>
                                <p>Riyadh, Saudi Arabia</p>
                                 
                                 </div>
                                  
                                
                              

             </div>

                </div>
              </Col>

              <Col xs={4} md={4}>
              
               <div id="col_custom">

                  <div id="col_custom6" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Aenean habitasse</h6>
                                <p>Riyadh, Saudi Arabia</p>
                                 
                                 </div>
                                  
                                
                              

             </div>
            
             
              
             

                </div>
      
              </Col>
              </Row>





             





           



        </div>
     </Row>


           
           

    </Container>
 </div>



{/* Part 11 starts*/}


<div className="part7 p-2" id="part7">
         <Container>

         <Row className="justify-content-center">
         <div class="col-12 col-lg-8">

      
   <div class="title6 m-3">
 
   <h3>Services</h3>
          

        </div>

        
       
             

        <Row className="p-2">




              <Col xs={4} md={4}>

            <div id="col_custom">
            
             <div id="col_custom7" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Bathroom</h6>
                               
                                 
                                 </div>
                                  
                                
                              

             </div>
            
             
             </div>

                   
      
              </Col>

              <Col xs={4} md={4}>

               <div id="col_custom">
            
             
              
                <div id="col_custom8" class="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Kitchen</h6>
                             
                                 
                                 </div>
                                  
                                
                              

             </div>

                </div>
              </Col>

              <Col xs={4} md={4}>
              
               <div id="col_custom">

                  <div id="col_custom9" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Living Room</h6>
                                
                                 
                                 </div>
                                  
                                
                              

             </div>
            
             
              
             

                </div>
      
              </Col>
              </Row>


{/* Row 2*/}


                   <Row className="p-2">
              <Col xs={4} md={4}>

            <div id="col_custom">
            
             <div id="col_custom10" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Bedroom</h6>
                                
                                 
                                 </div>
                                  
                                
                              

             </div>
            
             
             </div>

                   
      
              </Col>

              <Col xs={4} md={4}>

               <div id="col_custom">
            
             
              
                <div id="col_custom11" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Outdoor</h6>
                              
                                 
                                 </div>
                                  
                                
                              

             </div>

                </div>
              </Col>

              <Col xs={4} md={4}>
              
               <div id="col_custom">

                  <div id="col_custom12" className="brad">
              
             

                                 <div class="clr-overlay d-flex flex-column align-items-center justify-content-end">


                                <h6>Commercial</h6>
                              
                                 
                                 </div>
                                  
                                
                              

             </div>
            
             
              
             

                </div>
      
              </Col>
              </Row>





             





           



        </div>
     </Row>


           
           

    </Container>
 </div>


{/* Part 12 */}


<div className="part8 p-2" id="part8">
         <Container>

         <Row className="justify-content-center">
         <div class="col-12 col-lg-8">

      
         <div class="title5 m-3">
       
             <h3>Services</h3>

         </div>


         <Row >

         <Col id="new_col_cust1" className="cust_font cust_title mb-2" xs={12} md={4}>

          <div className="new_col_cust1_item">
           <Card>
              <Card.Img class="img-fluid p-3"variant="top" src={img_new2} />
              <Card.Body>
                <Card.Title>Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion</Card.Title>
                <Card.Text>
                 Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.
                </Card.Text>
                <Button variant="primary" className="btn2">READ MORE</Button>
              </Card.Body>
            </Card>

            </div>
                  

        </Col>


         <Col id="new_col_cust1_2" xs={12} md={8}>


          <Row className="mb-4">
          <Col id="new_col_cust2" className="cust_font cust_title"xs={6} >

          <div className="new_col_cust2_item">

           <Card>
             
              <Card.Body>
                <Card.Title>Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion</Card.Title>
                <Card.Text>
                 Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.
                </Card.Text>
                <Button variant="primary" className="btn2">READ MORE</Button>
              </Card.Body>
            </Card>
          </div>
            </Col>


          <Col id="new_col_cust2" className="cust_font cust_title"xs={6}>
          <div className="new_col_cust2_item">

           <Card>
             
              <Card.Body>
                <Card.Title>Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion</Card.Title>
                <Card.Text>
                 Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.
                </Card.Text>
                <Button variant="primary" className="btn2">READ MORE</Button>
              </Card.Body>
            </Card>
          </div>
            </Col>


          </Row>

          <Row className="mt-4">
           <Col id="new_col_cust2" className="d-flex align-items-end justify-content-end cust_font cust_title"xs={6} >

          <div className="new_col_cust2_item">

           <Card>
             
              <Card.Body>
                <Card.Title>Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion</Card.Title>
                <Card.Text>
                 Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.
                </Card.Text>
                <Button variant="primary" className="btn2">READ MORE</Button>
              </Card.Body>
            </Card>
          </div>
            </Col>


            <Col id="new_col_cust2" className="cust_font cust_title"xs={6} >

          <div className="new_col_cust2_item">

           <Card>
             
              <Card.Body>
                <Card.Title>Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion</Card.Title>
                <Card.Text>
                 Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur.
                </Card.Text>
                <Button variant="primary" className="btn2">READ MORE</Button>
              </Card.Body>
            </Card>
          </div>
            </Col>


          </Row>

        



         </Col>

            <div class="title5 mt-5 mb-5 text-center">
       
             <Button variant="primary" className="btn1">VIEW ALL</Button>

         </div>


         </Row>




          
        </div>
     </Row>


           
           

    </Container>
 </div>




<div className="part9">

<Container>

         <Row className="justify-content-center">

          <Row className="mt-5 mb-5">


        <Col xs={12} md={2} className="text-center">
          <img class="img-fluid" variant="top" src={vector} />

        

           <div className="mt-3 icn_items">
             <h6>Social Media</h6>
              
                <FontAwesomeIcon icon={faFacebookF} size="lg" className="m-1"  ></FontAwesomeIcon>
                <FontAwesomeIcon icon={faTwitter} size="lg"  className="m-1"></FontAwesomeIcon>
               <FontAwesomeIcon icon={faInstagram} size="lg"  className="m-1"></FontAwesomeIcon>
 
          </div>
          
           

        </Col>

        <Col xs={12} md={2}>
         <h6>Products</h6>

         <div className="mt-3 list_itm">
          <p>Sand Stone</p>
          <p>Stone</p>
          <p>Cement</p>
          <p>Soft Stone</p>
 
          </div>

        </Col>

        <Col xs={12} md={2}>
          <h6>Services</h6>

         <div className="mt-3 list_itm">
          <p>Measurement Service</p>
          <p>Product Advice</p>
          <p>Interior Design</p>
       
 
          </div>
        </Col>

        <Col xs={12} md={2}>
          <h6>Contact information</h6>
          <p className="foot_text" style={{fontSize:"12px"}}>3181 Al Imam Saud Ibn Abdul Aziz Branch Rd,An Nuzhah, Riyadh 12474, Saudi Arabia</p>
        </Col>

        <Col xs={12} md={3}>
                <Row className="mb-2">
                
                           <Col xs={4} md={4}>

                       
                                    <div className="f_col">
                                    
                                     <img variant="top" src={fm1} />
                                  
                                    </div>
                       
                             </Col>

                              <Col xs={4} md={4}>

                          
                                    <div className="f_col">
                                   
                                     <img variant="top" src={fm2} />
                                    
                                    </div>
                            
                             </Col>
                              <Col xs={4} md={4}>

                         
                                    <div className="f_col">
                                    
                                     <img variant="top" src={fm3} />
                                    
                                    </div>
                         
                             </Col>
             
                </Row>
                <Row className="mt-2">

                         <Col xs={4} md={4}>

                           
                                    <div className="f_col">
                                    
                                     <img variant="top" src={fm4} />
                                   
                            
                                </div>
                             </Col>

                              <Col xs={4} md={4}>

                      
                                    <div className="f_col">
                                   
                                     <img  variant="top" src={fm5} />
                                    
                                    </div>
                               
                             </Col>
                              <Col xs={4} md={4}  >

                                    <div className="f_col">
                                     
                                     <img  variant="top" src={fm6}/>
                                    
                                    </div>

                             
                             </Col>
                </Row>
        </Col>


        </Row>
         </Row>


</Container>
</div>
 
 



         



</div>
  	

      

   

  );

  
}


export default Home;