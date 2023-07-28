import ItemCount from "./ItemCount"

import "./itemDetail.css"

function ItemDetail({producto}){
    const onAdd = (cantidad) => {
        console.log("compraste:", cantidad)
      }
    return(
        <div className="product"> 
            <h2 className='productName'>Detalle de:{producto.producto}</h2>
            <img className="imgDefault" src={producto.imagen} alt="imagen default"/>
            <h2 className='productName'>${producto.price}</h2>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/> 
        </div>
    )
}

export default ItemDetail;