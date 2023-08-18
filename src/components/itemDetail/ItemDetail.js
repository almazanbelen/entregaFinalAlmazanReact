import ItemCount from "../itemCount/ItemCount"
import { useContext, useState } from "react"

import "./itemDetail.css"
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";
import imagen  from "../../assets/Imagen.png";



function ItemDetail({data}){

    const [addCart, setAddCart] = useState(false);
    const {addProduct} = useContext(CartContext)
    const onAdd = (quantity) => {
        setAddCart(true)
        addProduct( data, quantity)
    }
    
    return(
       
        <div className="product"> 
            <h2 className='productName'>{data.producto}</h2>
            <img className="imgDefaultDetail" src={imagen} alt="imagen default"/>
            <h2 className='productName'>${data.price}</h2>
            { addCart ? <Link to="/cart" style={{textAlign:"center", color: "#b8cad0"}}>Terminar compra</Link> : 
            <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>}
        </div>
        
    )
}

export default ItemDetail;