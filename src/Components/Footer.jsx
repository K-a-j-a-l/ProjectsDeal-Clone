import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 text-white">
      <div>
        {/* First Row */}
        <Container fluid style={{ backgroundColor: '#10151c', padding:'50px 220px'}}>
          <Row>
            <Col md={3}>
              <h5 className="footer-heading"><i className="fa-solid fa-house-chimney" style={{color:'#1968b5', fontSize:'1rem', marginRight:'10px'}}></i>About Us</h5>
              <p className="footer-para">Established in 2001, Projectsdeal was conceived with the vision to provide the best dissertation writing services in the UK through well-written dissertation, thesis, essay, research paper, term paper and book report, that will enable our clients secure a good career and make their parents proud.</p>
              <p className="footer-para">Thanks to your continued love and support, we have recently added 134 new professional experts on board in addition to our current team.</p>
              <p className="footer-link" style={{ color: '#337ab7' }}><a href="">More about Projectsdeal</a></p>
            </Col>
            <Col md={3}>
              <h5 className="footer-heading" style={{fontSize:'1rem'}}><i className="fa-solid fa-display" style={{color:'#1968b5', fontSize:'1rem', marginRight:'10px'}}></i>We are the Only Legitimate Dissertation Writing Service that is Trusted & Ranked on Inc, Safe to Order Online:</h5>
              <img src='https://projectsdeal.co.uk/images/Inc-Verification.png' alt='img' />
              <p className="footer-para">020 3290 0046</p>
              <p className="footer-link"> CONTACT US</p>
            </Col>
            <Col md={3}>
              <h5 className="footer-heading"><i className="fa-regular fa-comments" style={{color:'#1968b5', fontSize:'1rem', marginRight:'10px'}}></i>Dissertation Related Services</h5>
              <p className="footer-link">Dissertation Topics</p>
              <p className="footer-link">Do My Dissertation</p>
              <p className="footer-link">Dissertation Proposal Writing Service</p>
              <p className="footer-link">Literature Review Writing Service</p>
              <p className="footer-link">Masters Dissertation Writing Service</p>
              <p className="footer-link">PhD Dissertation Writing Service</p>
              <Button variant="primary">Calculate Dissertation Writing Cost</Button>
            </Col>
            <Col md={3}>
              <h5 className="footer-heading"><i className="fa-regular fa-calendar-minus" style={{color:'#1968b5', fontSize:'1rem', marginRight:'10px'}}></i>For Urgent Deadline</h5>
              <p>Whatsapp: +44 7447 882377</p>
            </Col>
          </Row>
        </Container>

        {/* Second Row */}
        <Container fluid style={{ backgroundColor: '#1a202a', padding:'50px 220px' }}>
          <Row>
            <Col>
              <div className='d-flex justify-content-center'>
                <div className='footer-social-icon'><i class="fa-brands fa-facebook-f"></i></div>
		<div className='footer-social-icon'><i class="fa-brands fa-youtube"></i></div>
		<div className='footer-social-icon'><i class="fa-brands fa-instagram"></i></div>
		<div className='footer-social-icon'><i class="fa-brands fa-pinterest-p"></i></div>
		<div className='footer-social-icon'><i class="fa-brands fa-linkedin-in"></i></div>
		<div className='footer-social-icon'><i class="fa-brands fa-google"></i></div>
		<div className='footer-social-icon'><i class="fa-brands fa-whatsapp"></i></div>
              </div>
	      <div className='d-flex flex-column justify-content-center'>
		    <p style={{ color: '#337ab7', fontWeight:'700'}}>Corporate Address:</p>
              	    <p>10 Upper Bank Street London, London E145GH United Kingdom</p>
              	    <p>Telephone: +44 (0)20 3290 0046</p>
              	    <p className="footer-para">Copyright &copy; 2001-2024 Projectsdeal. All rights reserved.</p>
	      </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
