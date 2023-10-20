import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <div className="container py-2">
          <Link  to="/" className=' text-white text-decoration-none'>E-commerce app</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className='px-2 text-decoration-none text-white'>Home</NavLink>
              <NavLink to="/counter" className='px-2 text-decoration-none text-white '>counter</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}
export default NavBar