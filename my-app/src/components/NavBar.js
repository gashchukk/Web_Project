import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';

function NavBar() {
    return (
        <Navbar className="custom-navbar">
            <Container>
                <Navbar.Brand href="/" style={{color: "black"}}>Alutek</Navbar.Brand>
                <Nav className="nav-center">
                    <Nav.Link href="/" style={{color: "black"}}>About Us</Nav.Link>
                    <Nav.Link href="/contacts"style={{color: "black"}}>Contacts</Nav.Link>
                    <NavDropdown style={{color: "white"}} title="Catalogue" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/catalogue">Розсувні Системи до шаф купе</NavDropdown.Item>
                        <NavDropdown.Item href="/frameprofile">Алюмінієвий рамковий профіль </NavDropdown.Item>
                        <NavDropdown.Item href="/furniture">Фурнітура</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/systemtypes"> Види алюмінієвих меблевих систем </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
