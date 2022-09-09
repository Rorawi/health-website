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
                                <img src="./images/woman2.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Blood transfusion</h3></Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/woman2.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Laboratory tests</h3></Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/woman2.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Laboratory tests</h3></Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='what-we-do-row'>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/woman2.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Laboratory tests</h3></Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/woman2.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Laboratory tests</h3></Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='services-thumbnail-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/woman2.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Col className='text-center'><h3>Laboratory tests</h3></Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
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
                        <Col xs={11}>
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
                        </Col>
                       </Row>
                 
                    </Col>
                </Row>
</Container>
        </div>
    );
}

export default Services;
