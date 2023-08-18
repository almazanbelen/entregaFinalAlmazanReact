import { useState } from "react";
import {CartContext} from "./cartContext"

function CartProvider({children}){

    const[cart, setCart] = useState([]);

    const addProduct = (item, quantity) =>{
        let newCart;
        let product = cart.find(product => product.id === item.id)
        if(product){
            product.quantity += quantity
            newCart =[...cart]
        } else{
            product = {...item, quantity:quantity}
            newCart = [...cart, product]
        }
        setCart(newCart)
    }
    const clearCart = () => setCart([]);
    const findCart = (id) => cart.findIndex(product => product.id === id) ? true : false;
    const removeCart = (id) => setCart (cart.filter(product => product.id !== id));
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    return (
        <CartContext.Provider value={{addProduct, clearCart, findCart, removeCart, totalPrice, totalProducts, cart}}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;