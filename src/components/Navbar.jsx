import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navbar = () => {

    //navigaton  menu
    const menuBtn = document.querySelector(".menu-btn")
    const navigation = document.querySelector(".navigation")

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active")
        navigation.classList.toggle("active")
    })

    const navbar = document.querySelector('.nav-fixed');
    window.onscroll = () => {
        if (window.scrollY > 300) {
            navbar.classList.add('nav-active');
        } else {
            navbar.classList.remove('nav-active');
        }
    };

    return (
        <div>


            <Col >
                <div class="menu-btn"></div>
                <Nav defaultActiveKey="/home" as="ul" className='Navbar navigation nav-fixed active'>
                    <Col xs={4}>
                        <Nav.Item as="li">
                            <Link className="nav brand" to={"/"}>Brand Name</Link>
                        </Nav.Item>

                    </Col>

                    <Col className='navlink'>

                        <Nav.Item as="li">
                            <Link className="nav" to="/about">
                                About
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav" to={"/services"}>Services</Link>
                        </Nav.Item>
                      
                        <Nav.Item as="li">
                            <Link className="nav" to="/contact">
                                Contact
                            </Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Link className="nav" to="/login">
                              Log in
                            </Link>
                        </Nav.Item>


                    </Col>



                </Nav>
            </Col>


        </div>
    );
}

export default Navbar;
