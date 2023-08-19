import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Game NEWS</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='link' to=''><Nav.Link href="#home">Главная</Nav.Link></Link>
            <Link className='link' to='/News'><Nav.Link href="#news">Новости</Nav.Link></Link>
            <Link className='link' to='/Read'><Nav.Link href="#reding">Читать</Nav.Link></Link>
            <Link className='link' to='/Gamses'><Nav.Link href="#games">Игры</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;