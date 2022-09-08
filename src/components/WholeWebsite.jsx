import React from 'react';
import AboutUs from './AboutUs';
import Department from './Department';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Pricing from './Pricing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myStyles.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";

const WholeWebsite = () => {
    return (
       <>
    
     
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/department' element={<Department/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
       
       </>
    );
}

export default WholeWebsite;
