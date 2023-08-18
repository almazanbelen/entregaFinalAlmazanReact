import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../context/cartContext";
import imagen from "../../assets/Imagen.png";
import "./itemCart.css"

function ItemCart({product}){
    const { removeCart } = useContext(CartContext)
        return(
            <div className="cartDetail"> 
                <img src={imagen} alt={product.producto}/>
                <div className="detail">
                    <p>Producto: {product.producto}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio por unidad: {product.price}</p>
                    <p>Subtotal: ${product.quantity * product.price}</p>
                    <Button onClick={() => removeCart(product.id)} variant="dark" style={{margin: 20}}>Eliminar</Button>
                </div>     
            </div>
        )   
    
}

export default ItemCart;