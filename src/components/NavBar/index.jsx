import "../../App.css";
import "./navbar.css";
import CartWidget from "../CartWidget";
import logo from "../../assets/navbarimg/logo.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header>
        <div className="container">
          <Navbar
            key={"lg"}
            expand={"lg"}
            color="white"
            className="mb-3 NavBar text-light bg-black"
          >
            <Container fluid>
              <NavLink to={"/"}>
                <div className="contlogo">
                  <div className="logo">
                    <img src={logo} alt="Logo" className="icoheader" />
                  </div>
                  <div className="logonom">Games&Films</div>
                </div>
              </NavLink>
              <Navbar.Toggle
                className="text-light"
                aria-controls={`offcanvasNavbar-expand-${"lg"}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${"lg"}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
                placement="end"
                className="text-light"
              >
                <Offcanvas.Header closeButton className="bg-black text-light">
                  Menú
                </Offcanvas.Header>
                <Offcanvas.Body className="bg-black">
                  <Nav className="justify-content-end flex-grow-1 pe-3 text-light">
                    <div className="centernav">
                    <NavLink className="text-light" to={"/category/films"}>
                      Pelis
                    </NavLink>
                    <NavDropdown
                      id={`offcanvasNavbarDropdown-expand-${"lg"}`}
                      className="text-light bg-dark"
                      title="Juegos"
                    >
                      <NavDropdown.Item href={"/category/pc"}>
                        <NavLink className="na" to={"/category/pc"}>PC</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href={"/category/ps5"}>
                        <NavLink to={"/category/ps5"}>PS5</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href={"/category/ps4"}>
                        <NavLink to={"/category/ps4"}>PS4</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Item href={"/category/ps3"}>
                        <NavLink to={"/category/ps3"}>PS3</NavLink>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href={"/category/games"}>
                        <NavLink to={"/category/games"}>Todos</NavLink>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          <div>
            <CartWidget/>
            </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
/*
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
              <NavDropdown.Item href=""><NavLink to={"/category/pc"}>PC</NavLink></NavDropdown.Item>
              <NavDropdown.Item href=""><NavLink to={"/category/ps5"}>PS5</NavLink></NavDropdown.Item>
              <NavDropdown.Item href=""><NavLink to={"/category/ps4"}>PS4</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href=""><NavLink to={"/category/ps3"}>PS3</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <NavLink to={"/category/games"}>Todos</NavLink>
                
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            
            <Nav.Link><NavLink to={"/category/films"}>Películas</NavLink></Nav.Link>
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
*/
