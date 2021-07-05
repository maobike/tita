import React from 'react';
import {Row, Col, Navbar, Nav} from 'react-bootstrap';

const Content = () => {

    return (
        <>
            <Row className="content-color">
                <Col md={12} className="my-auto">
                    <Row>
                        <Col md={12}>
                            <h1 className="title">EXPLORE BEYOND HORIZON</h1>
                            <br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <p>
                                Magna mundi referrentur quo, no rebum dignissim qui.<br/>
                                Per quodsi accusata id, agam labores.<br/>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}><br/></Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <button className="btn btn-sneak">VIEW OR WORK</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <br/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="text-center">
                    <i className="fa fa-th-large icon-sneak"></i>
                    <i className="fa fa-upload icon-sneak"></i>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home">
                        </Navbar.Brand>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">

                            </Nav>
                            <Nav className="navbar-center">
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
            </Row>
        </>
    )
}

export default Content;