import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'

function Encabezado() {

  const setActiveClass=({isActive})=>(isActive ? "active" : "notActive");

  return (
    <Navbar bg='info' className='text-light' variant='dark'>
      <Container>
        <NavLink className={setActiveClass} to="/">🍕Pizzeria Mamma mía!</NavLink>
          <NavLink className={setActiveClass} to="/carrito"> 🛒</NavLink>
      </Container>
    </Navbar>
  );
}

export default Encabezado;