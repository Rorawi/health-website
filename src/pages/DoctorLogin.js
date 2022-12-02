import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config'
import { useParams } from 'react-router-dom';
import './myPageStyles.css'



const DoctorLogin = () => {
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")

    const navigate = useNavigate()

    const nameInput = document.getElementsByClassName("name-input")
    //console.log(nameInput);

    const HandleSubmit = async(e) => {
        e.preventDefault()

        let newUser = { name: name, department: department, id: id };
        try {
            const user = await signInWithEmailAndPassword(auth, email, id)
            navigate("/doctorhome", { replace: true })
            console.log(user);
        } catch (e) {
            console.log(e);
        }

        setEmail("")
        setName("");
        setEmail("")
        setDepartment("");
        setId("");

        // console.log(
        //     newUser
        // );
        // console.log(
        //     newUser.name
        // );
    }
    const doctor = useParams()
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