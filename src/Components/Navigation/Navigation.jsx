import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav><Link className='td' to={'/'}>Home</Link></Nav>
          <Nav><Link className='td' to={'/foodrecipe'}>Food Recipe</Link></Nav>
          <Nav><Link className='td' to={'/about'}>About</Link></Nav>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Navigation;