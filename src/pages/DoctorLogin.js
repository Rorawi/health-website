import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './myPageStyles.css'



const DoctorLogin = () => {
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")

    const nameInput = document.getElementsByClassName("name-input")
    //console.log(nameInput);

    const HandleSubmit = async(e) => {
        e.preventDefault()


    }
    
    return (
        <div>


            <Container>


                <Row>
                    < Col xs={2}></Col>
                    <Col xs={8}>
                        <div className='doctor-form'>
                            <p className='loginStatus'> LOG IN AS A DOCTOR</p>
                            <div class="input-group">
                                <input type="text" class='input name-input'
                                    value={name} onChange={(e) => {
                                        setName(e.target.value)
                                    }} />
                                <label class='doctor-placeholder'>Name here</label>
                            </div>
                            <div class="input-group">
                                <input type="text" class='input'
                                    value={department} onChange={(e) => {
                                        setDepartment(e.target.value)
                                    }} />
                                <label class='doctor-placeholder'>Department</label>
                            </div>

                            <div class="input-group">
                                <input type="text" class='input' value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                                <label class='doctor-placeholder'>Your Email</label>
                            </div>
                            <div class="input-group">
                                <input type="text" class='input' value={id} onChange={(e) => {
                                    setId(e.target.value)
                                }} />
                                <label class='doctor-placeholder'>Your Id</label>
                            </div>




                            <div className="button">
                                <a><button onClick={HandleSubmit}>Send message</button></a>
                            </div>
                        </div>
                    </Col>
                    < Col xs={2}></Col>
                </Row>
            </Container>

        </div>

    );
}

export default DoctorLogin;