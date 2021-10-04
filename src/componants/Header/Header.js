import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import '../Header/Header.css';
 
const Header = () => {

    return (
 
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="p-2" href="#home">Educational <span className="color">Knowledge</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
 
                            <NavLink to="/home" className="p-2  " 
                            style={{
                                textDecoration: 'none'
                            }}activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}>Home</NavLink>
                            <NavLink to="/about"
                            className="p-2  "
                            style={{
                                textDecoration: 'none'
                            }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>About</NavLink>
                            <NavLink to="/service"
                            className="p-2  "
                            style={{
                                textDecoration: 'none'
                            }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Service</NavLink>
                            <NavLink to="/founders"
                            className="p-2  "
                            style={{
                                textDecoration: 'none'
                            }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}>Founders</NavLink>
                        </Nav>
                        <Nav>
 
                        </Nav>
                    </Navbar.Collapse>
 
                </Container>
            </Navbar>
        </div>
 
    );
};
 
export default Header;
 
 
 
 
 
 

