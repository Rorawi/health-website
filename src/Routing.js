import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<LoginPage/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Routing;
