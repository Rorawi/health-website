import React from 'react';
import { Container, Row, Col,Form,Button,Carousel } from 'react-bootstrap';
import { Icon } from '@iconify/react';
const Contact = () => {




    return (
        <div>
             <Container fluid>
                <Row>
                    <Col xs={12} className='services-bg text-center'>
                        <h5>Contact Us</h5>
                      <h2>Get In Touch</h2>
                    </Col>
                </Row>
                </Container>
<br/>
<br/>
<br/>
<br/>
<br/>
                    <Container>
                        <Row className='text-center contact-row'>
                            <Col className='contact-details'>
                            <p><Icon icon="wpf:assistant" className='logo' height={40}/></p>
                            <h3>Call Us</h3>
                            <span>+233 5547 735 578 </span>
                            </Col>

                            <Col className='contact-details'>
                            <p><Icon icon="dashicons:email-alt" height="60" /></p>
                            <h3>Email Us</h3>
                            <span><a href="http://">healthwebsite@gmail.com</a> </span>
                            </Col>

                            <Col className='contact-details'>
                            <p><Icon icon="carbon:location"  height="60" /></p>
                            <h3>Locate Us</h3>
                            <span>Hamburg, Germany</span>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                    <Row>
                    <Col xs={12} className='text-center what-we-do'>
                        <h2>Contact Us</h2>
                        <div className="hr">
                            <div className="red"></div>
                        </div>

                        <h5>We will be glad to have a talk with you</h5>
                    </Col>
                </Row>

                <Row>
                   {/* < Col xs={2}></Col> */}
                    <Col xs={12}>
                    <div className='contact-form'>
                   <div className="two-in-one-input">
                   <div class="input-group">
            <input type="text" class='input'/>
            <label class='contact-placeholder'>Name here</label>
            </div>
                    <div class="input-group">
            <input type="text" class='input'/>
            <label class='contact-placeholder'>Email address here</label>
            </div>
                   </div>
                   <div className="two-in-one-input">
                   <div class="input-group">
            <input type="text" class='input'/>
            <label class='contact-placeholder'>Subject here</label>
            </div>
                    <div class="input-group">
            <input type="text" class='input'/>
            <label class='contact-placeholder'>Your phone number</label>
            </div>

           
                   </div>

                   <div class="input-group textarea">
            <textarea type="text" class='textarea-input'/>
            <label class='contact-placeholder'>Your message here</label>
            </div>
                   <div className="button">
                 <a href="winifredasante15@gmail.com"><button>Send message</button></a>
                   </div>
                    </div>
                    </Col>
                    {/* < Col xs={2}></Col> */}
                </Row>
                    </Container>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
<Container fluid>
    <Row>
        <Col>
        MAP HERE
        </Col>
    </Row>
</Container>
        </div>
    );
}

export default Contact;
