import React from 'react';
import { Container, Row, Col,Form,Button,Carousel } from 'react-bootstrap';
import { Icon } from '@iconify/react';
const Services = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} className='services-bg text-center'>
                        <h5>Our services</h5>
                      <h2>What we do</h2>
                    </Col>
                </Row>


                <Container className='services-thumbnail-container' fluid>
                 
                    <Row className='what-we-do-row'>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/bloodman.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Blood transfusion</h3></Col>
                                <h5>We organise alot of day to day activites for blod donations.Also we give others willing
                                    to donate blood the opportunites; and they are given some prizes.
                                </h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/lab-test.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Laboratory tests</h3></Col>
                                <h5>Laboratory tests are carried on when we are giving blood out and also we do series
                                    of lab tests to help in easy diagnosis. 
                                </h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/mom-and-child.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Parental Care</h3></Col>
                                <h5>We organise parental care orientations for parents, especially the nursing or
                                    lactating mothers and pregnant women; on how to cater for their wards.
                                </h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='what-we-do-row'>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/children.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Child care</h3></Col>
                                <h5>Children, being our future leaders are our first priority.
                                    We offer child care activities for our children wards like games and so on
                                    to make children feel at home in our institution.
                                </h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/old-care.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Personal Care</h3></Col>
                                <h5>You can book our personal health care hospitality. Here we come to your comfort zones 
                                    to give you the right and best treatment you need. 
                                </h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/children.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Screening</h3></Col>
                                <h5>We offer x-ray screening,scanning the stomach,eye screening.
                                     </h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

</Container>

<Container fluid>
<Row>
                    <Col xs={12} className='services-bg-2'>
                       <Row>
                        <Col xs={1}></Col>
                      <Row>
                        <Col xs={6}>
                              
                       <div className="service-hr">
                            <div className="service-red"></div>
                        </div>
                        <div className="service-bg-text">
                            <h2>We are pleased to have<br/> the best health care for you.</h2>
                        </div>
                        <a href="#">Book now</a>
                        </Col>
                      </Row>
                       
                       </Row>
                 
                    </Col>
                </Row>
</Container>
        </div>
    );
}

export default Services;
