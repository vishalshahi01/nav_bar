import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faInfo, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(40); // Initial width of sidebar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setSidebarWidth(isOpen ? 40 : 250); // Toggle sidebar width
  };

  return (
    <Container fluid className='m-0 p-0'>
      <Row className='bg-secondary m-0 p-0'>
        <Col md={3} className={`text-white m=- p-0 vh-100 fixed-top`} style={{ width: sidebarWidth, transition: 'width 0.3s ease-in-out' }}>
          <div className='bg-dark h-100 m-0 p-0'>
            <button className="btn btn-dark bg-primary" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>

            <Nav className={`flex-column bg-dark h-100`}>
              <Nav.Link href="#Home" className="text-white">
                {isOpen ? (
                  <>
                    <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} /> Home
                  </>
                ) : (
                  <FontAwesomeIcon icon={faHome} />
                )}
              </Nav.Link>
              <Nav.Link href="#About" className="text-white">
                {isOpen ? (
                  <>
                    <FontAwesomeIcon icon={faInfo} style={{ marginRight: '10px' }} /> About
                  </>
                ) : (
                  <FontAwesomeIcon icon={faInfo} />
                )}
              </Nav.Link>
              <Nav.Link href="#Services" className="text-white">
                {isOpen ? (
                  <>
                    <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '5px' }} /> Services
                  </>
                ) : (
                  <FontAwesomeIcon icon={faBriefcase} />
                )}
              </Nav.Link>
              <Nav.Link href="#Career" className="text-white">
                {isOpen ? (
                  <>
                    <FontAwesomeIcon icon={faBriefcase} style={{ marginRight: '5px' }} /> Career
                  </>
                ) : (
                  <FontAwesomeIcon icon={faBriefcase} />
                )}
              </Nav.Link>
              <Nav.Link href="#Contact" className="text-white">
                {isOpen ? (
                  <>
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} /> Contact
                  </>
                ) : (
                  <FontAwesomeIcon icon={faEnvelope} />
                )}
              </Nav.Link>
            </Nav>
          </div>
        </Col>
        {/* Body Content */}
        <Col md={9}  style={{ marginLeft: isOpen ? 250 : 40, transition: 'margin-left 0.4s ease-in-out' }}>
          {/* Add your content here */}
          <div className="p-5 text-white">
            <h1> Content</h1>
            <p>This is the content area.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SideNavBar;
