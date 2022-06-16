import { Link } from 'react-router-dom'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../style/navbar.css'
import { useSelector } from 'react-redux';
import  logo from '../img/logo.jpg';
export const Navb = () => {
const {cantidad} = useSelector((store)=>  store.pedidos)

  return (
    <Navbar fixed="top" className='navbar text-light' variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src={logo} alt='parrila'/></Navbar.Brand>
        <Nav className="me-auto">
          <Link to='/' className='m-1'><button className='btnNav'>Home</button></Link>
          <Link to='/menu' className='m-1'><button className='btnNav'> Menu</button></Link>
        </Nav>
        <Link to='/carrito' className='m-1'>
          <img className='cart' width=' 25px' src='https://res.cloudinary.com/edwin3002/image/upload/v1654882739/medallo/cart-removebg-preview_wifet5.png' alt='cart' />
          <span className='mx-1 text-light'>{cantidad}</span>
          </Link>
      </Container>
    </Navbar>
  )
};
