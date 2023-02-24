import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';

import './nav.css';



import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function Header(props) {
    return (
    <>

<Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src={props.image} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
          <nav class="navbar ms-auto">
    <div class = "nav-items">


    <div class = "nav-item">
    <NavLink to ="/">Home
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/menu" >Menu
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/offers">Offers
    </NavLink>
    </div>

     <div class = "nav-item">
    <NavLink to="/restaurant">Restaurants
    </NavLink>
    </div>

     <div class = "nav-item">
    <NavLink to="/careers">Careers
    </NavLink>
    </div>

      <div class = "nav-item">
    <NavLink to="/reward">Rewards
    </NavLink>
    </div>



    <div class = "nav-item">
    <NavLink to="/about">More
    </NavLink>
    </div>

  


</div>
</nav>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Navbar>
    <Container>


      
       





  
     
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;