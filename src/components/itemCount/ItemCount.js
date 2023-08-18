import { Button } from "react-bootstrap";
import {useState} from "react"

const ItemCount = ({stock, onAdd, initial}) => {
    const [cantidad, setCantidad] = useState(initial)
    const sumarCantidad = () => {
        if(cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const restarCantidad = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div style={{color:"white", textAlign:"center",}}>
            <Button variant="dark" onClick={restarCantidad}>-</Button>
            <span style={{margin: 20}}>{cantidad}</span>
            <Button variant="dark" onClick={sumarCantidad} >+</Button>
            <div>
                <Button variant="dark" style={{margin: 20}} disabled= {cantidad===0} onClick={()=>onAdd(cantidad)}>Agregar al carrito</Button> 
            </div>  
        </div>
    )
}
export default ItemCount;