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
      <Navbar>
    <Container>


        <Navbar.Brand>
         <img src={props.image} />
        </Navbar.Brand>

           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
         
          </Form>
       



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

     
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;