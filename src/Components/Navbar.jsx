import React from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import '../style.css';

const CustomNavbar = () => {
  return (
    <div style={{position:'fixed', top:'0', width:'100%', zIndex:'100'}}>
      <Row className="details-row d-flex justify-content-center align-items-center p-4">
        <Col md={4} style={{textAlign:"center", color:"white"}}>
          <img src="https://projectsdeal.co.uk/images/logo.png" />
        </Col>
	<Col md={5} style={{textAlign:"right", fontStyle: "oblique", color:"white"}}>
          <h5>No.1 Dissertation Writing Services in UK,<span style={{color:"#f5d142", fontSize:"1rem"}}>Since 2001</span></h5>
        </Col>
	<Col md={3}>
          <Button className="btn"><i class="fa-solid fa-phone"></i>Call +44 20 329000046</Button>
        </Col>
      </Row>
      <Row className="navbar-row p-0 mx-0">
        <Col>
          <Navbar>
              <Nav className="ml-auto">
		<Nav.Link href="#" className="custom-nav-link active">Home</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">Dissertation</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">Coursework Help</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">Research Paper Help</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">Dissertation Topics</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">Dissertation Examples</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">Dissertation Structures</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">Essay Help</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">PhD Proposal</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">PhD Thesis</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">Assignment Help</Nav.Link>
              	<Nav.Link href="#" className="custom-nav-link">Blog</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
};

export default CustomNavbar;
