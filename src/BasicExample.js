import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';
import './basic.css';

function BasicExample() {
    return (
    <>
      <Navbar>
    <Container>
    <nav class="navbar ms-auto">
    <div class = "nav-items">


    <div class = "nav-item">
    <NavLink to ="/">HOME
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/spaces" >SPACES
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/ps">PRODUCTS & SERVICES
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/showrooms">SHOWROOMS
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/company">COMPANY
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/media">MEDIA
    </NavLink>
    </div>

    <div class = "nav-item">
    <NavLink to="/contact">Contact
    </NavLink>

    </div>


</div>
</nav>
        </Container>
      </Navbar>
     
    </>
  );
}

export default BasicExample;