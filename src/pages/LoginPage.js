import React from 'react';
import { Link } from "react-router-dom"
import { Container,Row,Col } from 'react-bootstrap';
import './myPageStyles.css'

const LoginPage = () => {
    return (
        <div>
                <br/>
                <br/>
                <br/>
            <div className="loginFisrt-page">
                <p className='loginStatus text-center'>LOG IN AS A</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col>  
                        <Link to={"/doctorlogin"}><div className='login-div'><h3> Doctor</h3></div></Link>
                        </Col>
                        <Col>
                            <Link to={"/patientlogin"}><div className='login-div'><h3>Patient</h3></div></Link>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <br/>
                <br/>
                <p className='back-toregister'><Link to={"/register"}><p>You don't have an id yet? Register here to get yours</p></Link></p>
            </div>
        </div>
    );
}

export default LoginPage;
