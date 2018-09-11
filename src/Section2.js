import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//font awesome modules
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faMapMarkerAlt, faBriefcase, faUsers} from '@fortawesome/free-solid-svg-icons'

library.add(faDollarSign,faMapMarkerAlt,faBriefcase,faUsers);

function Section2(props) {
    const bgStyle = {background:'#EAEAEA',minHeight:"100vh",padding:'20px'};

    return <div style={bgStyle}>
                <Container>  
                    <h1 className="text-center">My Kinda Job</h1>
                    <Row>
                        <Col sm={6}>
                            <h3>Front End Developer</h3>
                            <p>Front end developers are responsible for developing new user facing features. Creating and optimizing reuseable code and libraries. Ensuring the technical feasibility of UI/UX designs.</p>
                        </Col>
                        <Col sm={6}>
                        <h3>Full Stack Developer</h3>
                        <p>A Full Stack developer is responsible for front and back-end web development. Usually, good full stack developers will understand how to work with several languages and databases including PHP, HTML, CSS, JavaScript, (Node) and everything in between.</p>
                        </Col>
                    </Row>
                        <h1 className="text-center">Personal Preferences</h1>
                    <Row>
                        <Col md={3}>
                        <div className="text-center">
                            <FontAwesomeIcon icon="map-marker-alt"/>
                            <h3>Location</h3>
                            <hr/>
                        </div>
                            <ol>
                                <li>Rochester / Fingerlakes Region</li>
                                <li>Boston or surrounding area</li>
                                <li>Anywhere west coast</li>
                            </ol>
                        </Col>
                        <Col md={3}>
                        <div className="text-center">
                            <FontAwesomeIcon icon="users"/>
                            <h3>Size</h3>
                            <hr/>
                        </div>
                            <p>The smaller the better but around 50 is plenty. (Not a deal breaker)</p>
                        </Col>
                        <Col md={3}>
                            <div className="text-center">
                                <FontAwesomeIcon icon="briefcase"/>
                                <h3>Work</h3>
                                <hr/>
                            </div>
                            <ol>
                                <li>Rochester / Fingerlakes Region</li>
                                <li>Boston or surrounding area</li>
                                <li>Anywhere west coast</li>
                            </ol>
                        </Col>
                        <Col md={3}>
                        <div className="text-center">
                            <FontAwesomeIcon icon="dollar-sign"/>
                            <h3>Salary</h3>
                            <hr/>
                            <p>Dependent on location</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
   
  }

  export default Section2;