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
                            <h2>Personal health</h2>
                        </Col>
                        <Col xs={8}>
                            <h3>
                                We care for you health and some Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nulla fugiat laudantium eveniet non perferendis ullam ad 
                                corrupti molestias necessitatibus architecto, consequatur itaque deserunt
                            </h3>
                        </Col>
                    </Row>
                </Container>

                <br/>
                <br/>



            <br/>
            <br/>
                <Container>
                    <Row className='about1'>
                        <Col xs={4}>
                            <h2>Our Doctors' <br/> acheivements</h2>
                            <div className="about-hr">
                            <div className="about-red"></div>
                        </div>
                        </Col>
                        <Col xs={2}></Col>
                        <Col xs={6}>
                            <Row>
                            <Col>
                   <a href="http://unicef.org"> <img src="./images/unicef.png" alt="" className='sponsers-logo'/></a>
                    </Col>
                    <Col>
                   <a href="http://usaid.org"> <img src="./images/USAID.png" alt="" className='sponsers-logo'/></a>
                    </Col>
                    <Col>
                   <a href="http://mpharma.org"> <img src="./images/m1.png" alt="" className='sponsers-logo mpharma'/></a>
                    </Col>
                            </Row>
                        <br/>
                        <br/>
                            <Row>
                            <Col>
                   <a href="http://who.org"> <img src="./images/who.png" alt="" className='sponsers-logo'/></a>
                    </Col>
                    <Col>
                   <a href="http://who.org"> <img src="./images/who.png" alt="" className='sponsers-logo'/></a>
                    </Col>
                    <Col>
                   <a href="http://medshare.org"> <img src="./images/medshare.png" alt="" className='sponsers-logo'/></a>
                    </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>



                <Container>
                <Row>
                    <Col xs={12} className='text-center what-we-do'>
                        <h2>MEET OUR ABLE SPECIALISTS</h2>
                        <div className="hr">
                            <div className="red"></div>
                        </div>

                        <h5>
                            About <span>1000+</span> people visit our hospital for checkups, delivery sessions, surgeries and so on.<br/>
                            With our patience and hospitality we are known to have the best health care which attract customers and investors</h5>
                    </Col>
                </Row>
                <Row className='what-we-do-row'>
                        <Col className='aboutus-col'>
                            <Row className='row'>
                              
                            <Col>
                                <img src="./images/man1.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h2>Asante Winfred</h2>
                                <h5>Role: Surgeon</h5>
                                <h5>Awards: Best for hospitality</h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='aboutus-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/children.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h2>Asante Winifred</h2>
                                <h5>Role: Nurse</h5>
                                <h5>Awards: None</h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='aboutus-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/woman3.jpg" alt="woman" />
                                </Col>
                               
                            </Row>
                            <Row>
                                <Col>
                                <h2>Asante Winifred</h2>
                                <h5>Role: Dentist</h5>
                                <h5>Awards: Best for dental care</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='aboutus-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/children.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h2>Asante Winifred</h2>
                                <h5>Role: Mid wife,Cardiologist</h5>
                                <h5>Awards: Best in delivery and operations </h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                       </div>
    );
}

export default AboutUs;


{/* 
                <Container>
                    <Row className='what-we-do-row'>
                        <Col className='aboutus-col'>
                            <Row className='row'>
                              
                            <Col>
                                <img src="./images/children.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h2>HEALTHCARE FOR KIDS</h2>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='aboutus-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/children.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h2>HEALTHCARE FOR KIDS</h2>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>

                        <Col className='aboutus-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/children.jpg" alt="woman" />
                                </Col>
                               
                            </Row>
                            <Row>
                                <Col>
                                <h2>HEALTHCARE FOR KIDS</h2>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='aboutus-col'>
                        <Row className='row'>
                        <Col>
                                <img src="./images/children.jpg" alt="woman" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <h2>HEALTHCARE FOR KIDS</h2>
                                <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                     Hic laudantium reprehenderit velit nam sit deserunt aliquid quibusdam,</h5>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                  
                   
</Container>*/}