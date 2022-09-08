import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
const Footer = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={4}>
                        <Row>
                            <Col>
                            <div className="footer-text">
                                <h3>HEALTH WEBSITE</h3>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                     Possimus explicabo laborum ex debitis, commodi quam atque
                                      temporibus ratione. Veniam illum nam similique maxime voluptatibu
                                      s laborum aliquam atque quibusdam alias mollitia.</span>
                            </div>
                            <div className="socials">
                              <a href="https://www.linkedin.com/in/winifredasantewaaasante"> <Icon icon="akar-icons:linkedin-v1-fill" color="#e12454" height="30" /></a>
                                <a href="http://"><Icon icon="akar-icons:twitter-fill" color="#e12454" height="30" /></a>
                                <a href="http://"><Icon icon="ei:sc-facebook" color="#e12454" height="35" /></a>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='subscribe-col'>
                            <input type="text" className='subscribe' />
                            <button>Subscribe</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={6}>
                        <Row>
                            <Col>
                            <h6 className='text-center links'>DEPARTMENT</h6>
                            <div className="thin-hr">
                            <div className="thinred-line"></div>
                        </div>
                       <div className="link-div text-center">
                       <h6><a href="http://" className='link'>Cardioc</a></h6>
                        <h6><a href="http://" className='link'>Delivery</a></h6>
                        <h6><a href="http://" className='link'>Surgery</a></h6>
                        <h6><a href="http://" className='link'>Medicine</a></h6>
                        <h6><a href="http://" className='link'>Check-up</a></h6>
                       </div>
                            </Col>
                            <Col>
                            <h6 className='text-center links'>SUPPORT</h6>
                            <div className="thin-hr">
                            <div className="thinred-line"></div>
                        </div>
                        <div className="link-div text-center">
                       <h6><a href="http://" className='link'>Terms and conditions</a></h6>
                        <h6><a href="http://" className='link'>Privacy and policies</a></h6>
                        <h6><a href="http://" className='link'>FAQ</a></h6>
                        <h6><a href="http://" className='link'>Company License</a></h6>
                       </div>
                            </Col>
                            <Col>
                            <h6 className='text-center links-title'>GET IN TOUCH</h6>
                            <div className="thin-hr">
                            <div className="thinred-line"></div>
                        </div>
                        get in touch details
                            <Row>
                                <Col>
                                <h6><span>logo</span> Email</h6>
                            <h6>healthwebsite@gmail.com</h6>
                                </Col>
                            </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className='text-center'>
                        <h5> &copy;wI_care All rights reserved!</h5>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default Footer;
