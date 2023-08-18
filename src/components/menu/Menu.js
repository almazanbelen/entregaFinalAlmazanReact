
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import ShoppingCart from "../shoppingCart/ShoppingCart"

import LogoHome from "../../assets/LogoHome.png"

//menu de navegacion con sus estilos incorporados
function NavBar() {
  return (
    <div className="navBar">
       <Navbar style={{backgroundColor: "#91A9B0"}}>
        <Container>
          <Navbar.Brand as={Link} to="/" style ={{ marginRight: 150}}>
          <img  src= {LogoHome} alt="logo" style={{padding:10,marginRight: 220}}/>
          </Navbar.Brand>
          <Nav className="me-auto" style={{fontSize: 18, fontWeight: "bold", gap: 10}}>
            <Nav.Link style={{marginTop: 20}} as={Link} to="/terapias">Terapias</Nav.Link>
            <Nav.Link style={{marginTop: 20}} as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link style={{marginTop: 20}} as={Link} to="/contacto">Contacto</Nav.Link> 
          </Nav>
          <ShoppingCart/>   
        </Container>
      </Navbar>  
          
    </div>
  );
}

//export
export default NavBar;