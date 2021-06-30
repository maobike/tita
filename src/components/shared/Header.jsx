import React from 'react';
import logo from './../../assets/images/sneak-logo.png';
import {Navbar, Nav, Col} from 'react-bootstrap';

const Header = () => {

    return (
        <>
            <Col md={12} className="text-center">
                <Col md={11}>
                <Navbar collapseOnSelect expand="lg" bg="" variant="danger">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="200"
                            
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">ALL</Nav.Link>
                        <Nav.Link href="#deets">Branding</Nav.Link>
                        <Nav.Link href="#deets">Web</Nav.Link>
                        <Nav.Link href="#deets">Photopgrapy</Nav.Link>
                        <Nav.Link href="#deets">App</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </Col>
            </Col>
        </>
    )
}

export default Header;