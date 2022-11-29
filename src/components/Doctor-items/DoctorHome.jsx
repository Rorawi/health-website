import React,{useState} from 'react';
import { Container, Col, Row } from "react-bootstrap"
import { useSelector,useDispatch } from "react-redux"

const DoctorHome = (props) => {
   const [name,setName] = useState("")


    const detailBg = document.querySelector(".patient-details")
    const detailEl = document.querySelector(".output")
    const dispatch = useDispatch()
    console.log(detailEl,detailBg);


    const detail = useSelector((state) => (state.details))
    console.log(detail);
    // console.log(detail.id);

      const DeleteUser=(e)=> {
        e.preventDefault();
    }
    

  const show=()=> {
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
                                     value={name}  onChange={(e)=>{
                                        setName(e.target.value)
                                    }}/>
                                    <label className='doctor-placeholder'>Phone Number here</label>
                                </div>
                  <div className="input-group">
                                    <input type="text" className='input name-input' 
                                     value={name}  onChange={(e)=>{
                                        setName(e.target.value)
                                    }}/>
                                    <label className='doctor-placeholder'>Email here</label>
                                </div>
                  <div className="input-group">
                                    <input type="text" className='input name-input' 
                                     value={name}  onChange={(e)=>{
                                        setName(e.target.value)
                                    }}/>
                                    <label className='doctor-placeholder'>Age here</label>
                                </div>
                  <div className="input-group">
                                    <input type="text" className='input name-input' 
                                     value={name}  onChange={(e)=>{
                                        setName(e.target.value)
                                    }}/>
                                    <label className='doctor-placeholder'>Message here</label>
                                </div>

                                <div className="button">
                                <a><button>Add</button></a>
                            </div>
                  </form>
                 </div>
                
                <div className='add' onClick={showAddUserForm}><h6>+</h6></div>
            </Container>



          <div className="div">
          {detail.map((detail) => {
               return(
                <div key={detail.id} className='patient-details' onClick={show}>
                <div className='output'>
                       <h6><span>Patient name</span>: {detail.name}<br/></h6> 
                        <h6><span>Phonenumber</span>:{detail.phonenumber}<br/></h6>
                        <h6><span>Subject: </span>{detail.subject}<br/></h6>
                        <h6><span>email:</span> {detail.email}<br/></h6>
                        <h6><span> Message:</span> {detail.message}<br/></h6>
                        <h6><span> Message:</span> {detail.message}<br/></h6>
                        <button className="edit-btn">Edit</button>
                        <button className="delete-btn" onClick={DeleteUser}>Delete</button>

                        </div>
                        
            </div>
               )
            })}
          </div>
        </div>
    );
}


export default DoctorHome;


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
