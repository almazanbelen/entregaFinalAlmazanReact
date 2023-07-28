import {MdAddShoppingCart} from "react-icons/md";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import "./shoppingCart.css"



//funcion principal

function Productos() {
    
    return (
     <>
        <section className='shoppingCart'>            
            <Button variant="black">
                <MdAddShoppingCart className='carrito'/>
                <Badge style={{fontSize: 10,}} bg="black"></Badge>           
            </Button>
        </section>
     </>
    )
}


//export
export default Productos;