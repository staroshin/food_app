import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode} from "swiper"
import 'swiper/css';
import "swiper/css/free-mode"
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";
import {useEffect} from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

import './Products.css';

import StarRating from './StarRating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faClock } from '@fortawesome/free-solid-svg-icons';

import p1 from './swiper_img/1.png'
import p2 from './swiper_img/2.png'
import p3 from './swiper_img/3.png'
import p4 from './swiper_img/4.png'








const Products = () => {
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
   fetch('https://free-food-menus-api-production.up.railway.app/drinks?_limit=8')
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
    <div className = "Container py-4 px-4 justify-content-center">
     

        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={3.5}
        spaceBetween={60}
        className="p-3"
        >

        {items.map(item => ( 
        <SwiperSlide> 
          
                       <Col md="12">
                        <Card className="mb-4">
                           
                          <Card.Body>
                            <Card.Img className="img-fluid" src={item.img} />
                              <Card.Title>{item.name}</Card.Title>
                              <Card.Text className="d-flex "><p className="old_price">$15.99</p><p className="new_price">{item.price}</p></Card.Text>
                              <div className="d-flex ">
                              <div><StarRating/></div>
                              <div  className="time_text d-flex justify-content-end"><FontAwesomeIcon icon={faClock} className="icon_des"  ></FontAwesomeIcon>
                              <p>30 mins</p></div>
                              </div>

                                <div className="d-flex justify-content-center">
                              
                             
                              <Button onClick={() => setCount(count - 1)} className="btn2">-</Button>
                               <h5 className="order text-center">{count}</h5>
                              <Button onClick={() => setCount(count + 1)} className="btn2">+</Button> 
                              </div>  

                          </Card.Body>
                        

                         
                       </Card>
                       </Col>
          </SwiperSlide>
                ))}
       


        </Swiper>





    </div>
       
                      );
};

export default Products;