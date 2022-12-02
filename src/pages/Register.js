import React,{useState} from 'react';
import { Container, Row, Col, Form, Button, Carousel } from 'react-bootstrap';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase/config'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name,setName] = useState("")
    const [status,setStatus] = useState("")
    const [id,setId] = useState("")
    const [email,setEmail] = useState("")
    const [ward,setWard] = useState("")

    const navigate = useNavigate()

    const HandleSubmit = async(e) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, email, id)
            navigate("/login" , {replace:true})
            console.log(user);
        } catch (e) {
            console.log(e);
        }

        setEmail("")
        setId("")
    }

    return (
        <div>
            
            <Container>
               

               <Row>
                   < Col xs={2}></Col>
                   <Col xs={8}>
                       <div className='doctor-form'>
                       <p className='loginStatus'> REGISTER HERE</p>
                               <div class="input-group">
                                   <input type="text" class='input name-input' 
                                    value={name}  onChange={(e)=>{
                                       setName(e.target.value)
                                   }}/>
                                   <label class='doctor-placeholder'>Name here</label>
                               </div>
                               <div class="input-group">
                                   <input type="text" class='input name-input' 
                                    value={status}  onChange={(e)=>{
                                       setStatus(e.target.value)
                                   }}/>
                                   <label class='doctor-placeholder'>Status here</label>
                               </div>
                               <div class="input-group">
                                   <input type="text" class='input' 
                                    value={ward}  onChange={(e)=> {
                                       setWard(e.target.value)
                                   }}/>
                                   <label class='doctor-placeholder'>Ward</label>
                               </div>
                           
                               <div class="input-group">
                                   <input type="text" class='input'  value={email}  onChange={(e)=> {
                                       setEmail(e.target.value)
                                   }}/>
                                   <label class='doctor-placeholder'>Your Email</label>
                               </div>
                               <div class="input-group">
                                   <input type="password" class='input'  value={id}  onChange={(e)=> {
                                       setId(e.target.value)
                                   }}/>
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

export default Register;
