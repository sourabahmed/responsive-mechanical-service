import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Mechanical-Service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link  to="/home#services"><Link to="/home#services">Services</Link></Nav.Link>
                            <Nav.Link  ><Link to="/home#experts">Experts</Link></Nav.Link>
                            {
                              user.email?  
                                <Nav.Link ><Button onClick={logOut} variant="outline-danger">Logout</Button></Nav.Link>:
                                <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                            }
                             <Nav.Link  ><Link to="/login">Experts</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;