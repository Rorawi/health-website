import React from 'react';
import { Container, Row, Col,Form,Button,Carousel } from 'react-bootstrap';
const AboutUs = () => {
    return (
        <div>
           <Container fluid>
                <Row>
                    <Col xs={12} className='services-bg text-center'>
                        <h5>About Us</h5>
                      <h2>Who we are</h2>
                    </Col>
                </Row>
                </Container>
                <Container>
                    <Row className='about1'>
                        <Col xs={4}>
                            <h2>Personal health and Lorem Ispuim</h2>
                        </Col>
                        <Col xs={8}>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                 Optio eius laborum vero minima soluta eos voluptatem 
                                 exercitationem expedita hic autem. Itaque eos et autem.
                                  Vel, dolorum! Ipsam minima dolor repellendus?
                            </h3>
                        </Col>
                    </Row>
                </Container>

                <br/>
                <br/>


                <Container>
                    <Row className='what-we-do-row'>
                        <Col className='what-we-do-col'>
                            <Row className='row'>
                              
                                <Col><h3>Dental care</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='what-we-do-col'>
                        <Row className='row'>
                            
                                <Col><h3>Surgeries</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='what-we-do-col'>
                        <Row className='row'>
                               
                                <Col><h3>Laboratory tests</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='what-we-do-col'>
                        <Row className='row'>
                               
                                <Col><h3>Gynecology</h3></Col>
                            </Row>
                            <Row>
                                <Col>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                  
                   
                </Container>

        </div>
    );
}

export default AboutUs;
