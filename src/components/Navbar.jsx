import React from 'react';
import { Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>


            <Col >
                <Nav defaultActiveKey="/home" as="ul" className='Navbar'>
                    <Col xs={4}>
                        <Nav.Item as="li">
                            <Link className="nav brand" to={"/"}>Brand Name</Link>
                        </Nav.Item>

                    </Col>

                   

                    <Nav.Item as="li">
                        <Link className="nav" to="/about">
                            About
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className="nav" to={"/services"}>Services</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link className="nav" to="/department">
                            Department
                        </Link>
                    </Nav.Item>

                    <Nav.Item as="li">
                        <Link className="nav" to="/pricing">
                            Pricing
                        </Link>
                    </Nav.Item>



                </Nav>
            </Col>


        </div>
    );
}

export default Navbar;
