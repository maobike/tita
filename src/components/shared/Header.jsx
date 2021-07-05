import React from 'react';
import logo from './../../assets/images/sneak-logo.png';
import {Navbar, Nav, Col} from 'react-bootstrap';

const Header = () => {

    return (
        <>
            <Col md={12} className="text-center">
                <Col md={11}>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width="200"
                                
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">

                            </Nav>
                            <Nav>
                            <Nav.Link href="#all">ALL</Nav.Link>
                            <Nav.Link href="#branding">Branding</Nav.Link>
                            <Nav.Link href="#web">Web</Nav.Link>
                            <Nav.Link href="#photograpy">Photopgrapy</Nav.Link>
                            <Nav.Link href="#app">App</Nav.Link>
                            <Nav.Link href="#search"><i className="fa fa-search"></i></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Col>
        </>
    )
}

export default Header;