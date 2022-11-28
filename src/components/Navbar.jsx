import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navbar = () => {

    //navigaton  menu
   // const menuBtn = document.querySelector(".menu-btn")
   // const navigation = document.querySelector(".navigation")

   // menuBtn.addEventListener("click", () => {
     //   menuBtn.classList.toggle("active")
  //      navigation.classList.toggle("active")
//   //  })

//     const navbar = document.querySelector('.nav-fixed');
//     window.onscroll = () => {
//         if (window.scrollY > 300) {
//             navbar.classList.add('nav-active');
//         } else {
//             navbar.classList.remove('nav-active');
//         }
//     };

const menuBtn =()=> {   
    const menu = document.querySelector(".menu-btn")
    const navLink = document.querySelector(".navlink")
    const nav = document.querySelectorAll(".navActive")
    //console.log(nav);
    // console.log(menu);


    nav.forEach((nav)=> {
        nav.classList.toggle("active")
    })

        menu.classList.toggle("active")
        navLink.classList.toggle("active")
    
}

    return (
        <div>


            <Col >
                
                <Nav defaultActiveKey="/home" as="ul" className='Navbar navigation'>
                    <Col>
                        <Nav.Item as="li">
                            <Link className="nav brand" to={"/"}>WI_CARE</Link>
                        </Nav.Item>

                    </Col>

                    <Col className='navlink'>

                        <Nav.Item as="li">
                            <Link className="nav navActive" to="/about">
                                About
                            </Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Link className="nav navActive" to={"/services"}>Services</Link>
                        </Nav.Item>
                      
                        <Nav.Item as="li">
                            <Link className="nav navActive" to="/contact">
                                Contact
                            </Link>
                        </Nav.Item>

                        <Nav.Item as="li">
                            <Link className="nav navActive" to="/login">
                              Log in
                            </Link>
                        </Nav.Item>

                        
                    </Col>
                    <div className="menu-btn" onClick={menuBtn}></div>


                </Nav>
            </Col>


        </div>
    );
}

export default Navbar;




   // if(menu.classList.contains("active")) {
    //     menu.classList.remove("active")
    //     navLink.classList.remove("active")
    //    // nav.classList.remove("active")
    // }
    // else {
    //     menu.classList.add("active")
    //     navLink.classList.add("active")
    //     //nav.classList.add("active")
    // }