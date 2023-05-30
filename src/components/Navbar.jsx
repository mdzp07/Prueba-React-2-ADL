import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Encabezado() {
  return (
    <Navbar bg='info' className='text-light' variant='dark'>
      <Container>
        <Link to="/">🍕Pizzeria Mamma mía!</Link>
          <Link to="/carrito"> 🛒</Link>
      </Container>
    </Navbar>
  );
}

export default Encabezado;