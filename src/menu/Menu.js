import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Menu extends Component {    
    render() {
        return (
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">INICIO </Navbar.Brand>
                <Navbar.Brand href="#home">LOGIN </Navbar.Brand>
                  <Nav className="me-auto">
                    <Nav.Link href="#home">EQUIPO </Nav.Link>
                    <Nav.Link href="#link">DIRECCIÓN </Nav.Link>                    
                  </Nav>                
              </Container>
            </Navbar>
        );
    }
}

export default Menu;