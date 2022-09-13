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

const WholeWebsite = () => {
    return (
       <>
    
     
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
       
       </>
    );
}

export default WholeWebsite;
