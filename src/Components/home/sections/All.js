 
import React from 'react';

import {useState} from "react";
import {useEffect} from "react";

import {Link} from "react-router-dom"


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import './Slider.css';
import Products from './Products.js';

import StarRating from './StarRating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClock } from '@fortawesome/free-solid-svg-icons';




import s1 from './slider_img/1.png'
import s2 from './slider_img/2.png'
import s3 from './slider_img/3.png'
import s4 from './slider_img/4.png'
import s5 from './slider_img/5.png'
import s6 from './slider_img/6.png'
import s7 from './slider_img/7.png'
import s8 from './slider_img/8.png'
import s9 from './slider_img/9.png'
import s10 from './slider_img/10.png'








function All() {


 const [count, setCount] = useState(0);
 const [count2, setCount2] = useState(0);
 const [count3, setCount3] = useState(0);

const [count4, setCount4] = useState(0);
const [count5, setCount5] = useState(0);

const [count6, setCount6] = useState(0);
const [count7, setCount7] = useState(0);
const [count8, setCount8] = useState(0);
const [count9, setCount9] = useState(0);
const [count10, setCount10] = useState(0);

const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

useEffect(() => {
  fetch('https://bobsburgers-api.herokuapp.com/characters/?limit=3')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])






  

  return (
    
       <>
     
    <Container>



 
            <Row className="">

             

              

                  

                  {items.map(item => ( 
                     <Col md="4">
                      <Card className="mb-4 ">
                         
                        <Card.Body>
                          <Card.Img className="img-fluid" src={item.image} />


                          <Link to={`/fooddetails/${item.id}`}>
  
                            <Card.Title  className="slider_card">{item.name}</Card.Title>


                              </Link>


                            <Card.Text className="d-flex "><p className="old_price">$15.99</p><p className="new_price">{item.name}</p></Card.Text>
                            <div className="d-flex ">
                            <div><StarRating/></div>
                            <div  className="time_text d-flex justify-content-end"><FontAwesomeIcon icon={faClock} className="icon_des"  ></FontAwesomeIcon>
                            <p>30 mins</p></div>
                            </div>

                             

                        </Card.Body>
                      

                       
                     </Card>
                     </Col>
                    ))}
                   


                       

                  

                      
                    
                    </Row>



                    




                    






 </Container>
      
     
    </>
                      );
}

export default All;