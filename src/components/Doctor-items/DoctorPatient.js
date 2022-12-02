import React from 'react';

const DoctorPatient = ({patients}) => {
    return patients.map((item)=> (
        <div key={item.id} className='patient-details'>
        <div className='output'>
               <h6><span>Patient name</span>: {item.name}<br/></h6> 
                <h6><span>Phonenumber</span>:{item.phonenumber}<br/></h6>
                <h6><span>Subject: </span>{item.subject}<br/></h6>
                <h6><span>email:</span> {item.email}<br/></h6>
                <h6><span> Message:</span> {item.message}<br/></h6>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" >Delete</button>

                </div>
                </div>
    ))
}

export default DoctorPatient;




    //       <div className="div">
            
    //       {detailItem.map((detail,index)=> {
    //         return (
             
                
    // </div>
    //         )
    //       })}
//   </div>