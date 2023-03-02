
import "../../App.css"
import "./navbar.css";
import CardWidget from "../CardWidget/index.jsx"
import logo from "./logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function NavBar() {
  return (
    <header>
      <div className="headerin container">
        <div className="contlogo">
          <div className="logo">
            <img src={logo} alt="Logo" class="icoheader" />
          </div>
          <div className="logonom">MendoTechno</div>
        </div>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" class="fullblack">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Motherboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">GPUs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Memorias RAM</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Todos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">ServiMendo</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
      <CardWidget/>
      </div>
    </header>
  );
}

export default NavBar;
