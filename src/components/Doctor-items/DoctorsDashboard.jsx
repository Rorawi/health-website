import React,{useState} from 'react';
import { Container, Col, Row } from "react-bootstrap"
import { useSelector,useDispatch } from "react-redux"
import { doc, setDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import {v4 as uuid} from "uuid"
import { db } from '../../firebase/config';


const DashBoard = (props) => {
   const [name,setName] = useState("");
   const [phonenumber,setPhoneNumber] = useState("");
   const [email, setEmail] = useState("");
   const [age, setAge] = useState("");
   const [message, setMessage] = useState("")


   const detailItem = useSelector((state) => (state.UserReducer.details))


    const detailBg = document.querySelector(".patient-details")
    const detailEl = document.querySelector(".output")
    const dispatch = useDispatch()
    // console.log(detailEl,detailBg);


   
    console.log('detailItem',detailItem);
    // console.log('detailItem',detailItem.length);
    // console.log(detailItemName);

    

// Add a new document in collection "cities"

const handleClick = async(e)=> {
  e.preventDefault();
  let newUser = { name: name, phonenumber: phonenumber,email:email,age:age,message:message, id: uuid() };

 try { await setDoc(doc(db, "patients", newUser.id),newUser);
 } catch (e) {
  console.log(e);
 }
  setName("");
  setPhoneNumber("");
  setEmail("");
  setAge("");
  setMessage("");  

} 


const DeleteUser=async(e)=> {
  e.preventDefault();
  let newUser = { name: name, phonenumber: phonenumber,email:email,age:age,message:message, id: uuid() };

try {
  await deleteDoc(doc(db, "patients", newUser.id));

} catch (e) {
  console.log(e);
}
console.log('delete-btn clicked');
}

  const show=async()=> {

    const patientDetails = document.querySelectorAll(".patient-details")
    console.log(patientDetails);

    patientDetails.forEach((div)=> {
      div.classList.toggle("active")
    })
    


  }


  const showAddUserForm=()=> {
    const floatBtn = document.querySelector(".add")
   // console.log(floatBtn);

    const addDiv = document.querySelector(".addDiv")
    const addUser = document.querySelector(".addUser")
    //console.log(addDiv,addUser);
    addDiv.classList.toggle("active")
    addUser.classList.toggle("active")

    
  }
 
    return (
        <div className='doctorHome'>
            <Container className='welcome'>
                <Row>
                    <Col xs={12}>
                        <p> Welcome doctor {props.name}</p>
                    </Col>
                </Row>
                 <div className="addDiv">
                 <form className="addUser">
                  <div className="input-group">
                                    <input type="text" className='input name-input' 
                                     value={name}  onChange={(e)=>{
                                        setName(e.target.value)
                                    }}/>
                                    <label className='doctor-placeholder'>Name here</label>
                                </div>
                  <div className="input-group">
                                    <input type="text" className='input name-input' 
                                     value={phonenumber}  onChange={(e)=>{
                                        setPhoneNumber(e.target.value)
                                    }}/>
                                    <label className='doctor-placeholder'>Phone Number here</label>
                                </div>
                  <div className="input-group">
                                    <input type="text" className='input name-input' 
                                     value={email}  onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}/>
                                    <label className='doctor-placeholder'>Email here</label>
                                </div>
                  <div className="input-group">
                                    <input type="text" className='input name-input' 
                                     value={age}  onChange={(e)=>{
                                        setAge(e.target.value)
                                    }}/>
                                    <label className='doctor-placeholder'>Age here</label>
                                </div>
                  <div className="input-group">
                                    <input type="text" className='input name-input' 
                                     value={message}  onChange={(e)=>{
                                        setMessage(e.target.value)
                                    }}/>
                                    <label className='doctor-placeholder'>Message here</label>
                                </div>

                                <div className="button">
                                <a><button onClick={handleClick}>Add</button></a>
                            </div>
                  </form>
                 </div>
                
                <div className='add' onClick={showAddUserForm}><h6>+</h6></div>
                

                
            </Container>



          
         </div>
    );
}


export default DashBoard;


    // if(addDiv.classList.contains("active")) {
    //   addDiv.classList.remove("active")
    // }

    // else{
    //   addDiv.classList.add("active")}


    // if(addUser.classList.contains("active")) {
    //   addUser.classList.remove("active")
    // }

    // else{
    //   addUser.classList.add("active")
    // }
