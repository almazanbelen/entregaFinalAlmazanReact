import {MdAddShoppingCart} from "react-icons/md";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import "./shoppingCart.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/cartContext";



//funcion principal

function Productos() {
    const {totalProducts} = useContext(CartContext)

    return (
     <>
        <section className='shoppingCart'>            
            <Button as={Link} to="/Cart" style={{display:"flex", flexDirection: "row"}} variant="black">
                <MdAddShoppingCart className='carrito'/>
                <Badge style={{fontSize: 10, height: 20, marginTop: 10,}} bg="black">{totalProducts() || ""}</Badge>           
            </Button>
        </section>
     </>
    )
}


//export
export default Productos;