import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Icon } from '@iconify/react';
import { v4 as uuid } from "uuid";
import UserReducer from "../reducer/userReducer";
const Contact = () => {

    // const formInput = useSelector((state) => state.details)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const HandleSubmit = (e) => {
        e.preventDefault()

    }

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
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <div className="modal">
        <p>Hooray!😄 <br/>
            You just booked our services;
            <br/> Our team will arrive in no time😄</p>
        <button className="delete" >Undo</button>
    </div> */}
            <Container>
                <Row className='text-center contact-row'>
                    <Col className='contact-details'>
                        <p><Icon icon="wpf:assistant" className='logo' height={40} /></p>
                        <h3>Call Us</h3>
                        <span>+233 5547 735 578 </span>
                    </Col>

                    <Col className='contact-details'>
                        <p><Icon icon="dashicons:email-alt" height="60" /></p>
                        <h3>Email Us</h3>
                        <span><a href="http://">wi_care@gmail.com</a> </span>
                    </Col>

                    <Col className='contact-details'>
                        <p><Icon icon="carbon:location" height="60" /></p>
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
                                <div className="input-group">
                                    <input type="text" className='input'
                                        value={name} onChange={(e) => {
                                            setName(e.target.value)
                                        }} />
                                    <label className='contact-placeholder'>Name here</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" className='input'
                                        value={email} onChange={(e) => {
                                            setEmail(e.target.value)
                                        }} />
                                    <label className='contact-placeholder'>Email address here</label>
                                </div>
                            </div>
                            <div className="two-in-one-input">
                                <div className="input-group">
                                    <input type="text" className='input' value={subject} onChange={(e) => {
                                        setSubject(e.target.value)
                                    }} />
                                    <label className='contact-placeholder'>Subject here</label>
                                </div>
                                <div className="input-group">
                                    <input type="text" className='input' value={phonenumber} onChange={(e) => {
                                        setPhonenumber(e.target.value)
                                    }} />
                                    <label className='contact-placeholder'>Your phone number</label>
                                </div>


                            </div>

                            <div className="input-group textarea">
                                <textarea type="text" className='textarea-input' value={message} onChange={(e) => {
                                    setMessage(e.target.value)
                                }} />
                                <label className='contact-placeholder'>Your message here</label>
                            </div>
                            <div className="button">
                                <a><button onClick={HandleSubmit}>Send message</button></a>
                            </div>
                        </div>
                    </Col>
                    {/* < Col xs={2}></Col> */}
                </Row>
            </Container>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <Container fluid>
                <Row>
                    <Col>
                        MAP HERE
                    </Col>
                </Row>
            </Container> */}
        </div>
    );
}

export default Contact;
