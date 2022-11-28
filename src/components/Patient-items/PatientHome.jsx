import React from 'react';
import { useParams } from 'react-router-dom';

const PatientLogin = () => {
    const patient = useParams()
    return (
        <div>
           <p className='loginStatus'> Login as a patient</p>
        </div>
    );
}

export default PatientLogin;
