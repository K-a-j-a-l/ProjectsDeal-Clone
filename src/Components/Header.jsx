import React from 'react';
import { Container, Row, Col, Form, Button, Badge } from 'react-bootstrap';

const Header = () => {
  const dropdownData = [
    { options: ['--Please Select Academic Level--', 'Masters', 'Undergraduate', 'PhD'] },
    { options: ['--Please Select Domain', 'Agriculture', 'Botany', 'Computers', 'Information Technology'] },
    { options: ['--Please Select Desired Service--', 'Assignment', 'CourseWork', 'Essay', 'Dissertation', 'High Index Journal'] },
    { options: ['--Select No. of Words/Pages--', '1000 words -4 pages', '2000 words -8 pages', '4000 words -16 pages', '8000 words -32 pages'] },
    { options: ['--Select Tool--', 'None', 'SPSS', 'STATA', 'Eview'] },
  ];

  return (
    <Container fluid style={{marginTop:'170px'}}>
      <Row className="header d-flex justify-content-center">
	<Col md={3} style={{ textAlign: "left" }}>
          <img
            src="https://projectsdeal.co.uk/images/coursework_writing_services.png"
            alt="Header Image"
            className="img-fluid"
          />
        </Col>
        <Col md={3}>
          <img
            src="https://projectsdeal.co.uk/images/Student3.png"
            alt="Header Image"
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="details-form d-flex flex-column justify-content-center position-relative">
          <img src="https://projectsdeal.co.uk/images/projectsdeal_dissertation_writing_services_offer.png" style={{position: "absolute", top: "-10px", left: "5px", width: "210px"}} alt="Dissertation Writing Service"/>
          <h3 style={{ color: "white", textAlign: "center" }}><i className="fa-regular fa-circle-check mx-2"></i>Calculate Pricing</h3>
          <p style={{ color: "white", textAlign: "center" }}>Just Select Correct Options and Calculate Best Price</p>
          <Form>
            {dropdownData.map((dropdown, index) => (
              <Form.Group controlId={`dropdown${index}`} key={index}>
                <Form.Control as="select" className="mb-3">
                  {dropdown.options.map((option, optionIndex) => (
                    <option key={optionIndex}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            ))}
            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="Email" className="mb-3" />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Control type="tel" placeholder="Phone Number" className="mb-3" />
            </Form.Group>
            <Form.Group controlId="deadlineDate">
              <Form.Control type="date" placeholder="Deadline Date" className="mb-3" />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button style={{ color: "white", backgroundColor: "#d69f0f", padding:"15px" }} type="button">
		Click to Calculate
		<i className="fa-solid fa-calculator mx-2"></i>
              </Button>
            </div>
            <h4 style={{ textAlign: "center", color: "white", marginTop: "10px" }}>Result is all that Matters</h4>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
