import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import '../App.css';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/register"
              className={activeLink === 'register' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('register')}
            >
              Register
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('contact')}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about-us"
              className={activeLink === 'about-us' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('about-us')}
            >
              About Us
            </Nav.Link>
            {/* Link to User Details Form */}
            <Nav.Link
              as={Link}
              to="/user-details"
              className={activeLink === 'user-details' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('user-details')}
            >
              User Details Form
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/login"
              className={`${activeLink === 'login' ? 'active navbar-link' : 'navbar-link'} login-btn`}
              onClick={() => onUpdateActiveLink('login')}
            >
              Login
            </Nav.Link>
            {/* Removed the Sign Up link */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
