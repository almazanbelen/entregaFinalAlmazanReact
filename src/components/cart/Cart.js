import { useContext } from "react";
import CartContext from "../../context/cartContext";
import { Link } from "react-router-dom";
import ItemCart from "../itemCart/ItemCart";
import "./cart.css"
import {  Button } from "react-bootstrap";


import { buyer } from "../../mock/data";
import { addDoc, collection, getFirestore } from "firebase/firestore";


function Cart(){
    const {cart, totalPrice} = useContext(CartContext);
    if(cart.length === 0){
        return(
            <div className="isEmpty">
                <h1 className="titleEmpty">Carrito vacío</h1>
                <Button variant="dark">
                    <Link className="shop" to="/productos">Realizar compra</Link>
                </Button>
                    
                
                
            </div>
        )
    }

    const order = {
        buyer,
        items: cart.map(product => ({id: product.id, title: product.producto, price: product.price, quantity: product.quantity})),
        total: totalPrice()
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersColl = collection(db, "orders");
        addDoc(ordersColl, order)
        .then(({id})=> alert(`Tu compra fue exitosa\nNumero de orden ${id}`))       
    }

    return(
        <div className="cartProducts">
            {cart.map(product => <ItemCart key={product.id} product={product}/>)}
            <p className="total">Total: ${totalPrice()}</p>
            <Button variant="dark" onClick={handleClick}>Emitir compra</Button>      
            
        </div>
    )
    
}

export default Cart;