
import "../../App.css"
import "./navbar.css";
import CartWidget from "../CartWidget";
import logo from "./logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";



function NavBar() {
  return (
    <header>
      <div className="headerin container">
        <NavLink to={"/"}>
        <div className="contlogo">
          <div className="logo">
            <img src={logo} alt="Logo" class="icoheader" />
          </div>
          <div class="logonom">Games&Films</div>
        </div>
          </NavLink>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" class="fullblack">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Juegos" id="collasible-nav-dropdown">
              <NavDropdown.Item href=""><NavLink to={"/cat/pc"}>PC</NavLink></NavDropdown.Item>
              <NavDropdown.Item href=""><NavLink to={"/cat/ps5"}>PS5</NavLink></NavDropdown.Item>
              <NavDropdown.Item href=""><NavLink to={"/cat/ps4"}>PS4</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href=""><NavLink to={"/cat/ps3"}>PS3</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <NavLink to="/cat/games">Todos</NavLink>
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link href="/cat/films">Películas</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      <CartWidget/>
      </div>
    </header>
  );
}

export default NavBar;
