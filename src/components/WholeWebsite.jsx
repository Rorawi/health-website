import React from 'react';
import AboutUs from './AboutUs';
import Login from './Login';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myStyles.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Services from './Services';
import Register from '../pages/Register';
import DoctorLogin from '../pages/DoctorLogin'
import PatientLogin from '../pages/PatientLogin';
import DoctorHome from './Doctor-items/DoctorHome';
import PatientHome from './Patient-items/PatientHome';
import ErrorPage from './ErrorPage';
import ProtectedRoute from './ProtectedRoute';

const WholeWebsite = () => {
    return (
       <>
    
     
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/doctorlogin' element={<DoctorLogin/>}/>
            <Route path='/patientlogin' element={<PatientLogin/>}/>
            {/* Protected Routes will be wrapped here */}
            <Route path='/doctorhome' element={
                <ProtectedRoute>
                    <DoctorHome/>
                </ProtectedRoute>
}/>
               {/* Protected Routes will be wrapped here */}
               <Route path='/patienthome' element={<PatientHome/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
       
       </>
    );
}

export default WholeWebsite;
