import React from "react";
import "./item.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({prod})=>{
    
    return(
     <>
        <div className='cartDescription'>
            <img className="imgDefault" src={prod.imagen} alt="imagen default"/>
            <h1 className='productName'>{prod.producto}</h1>
            <h2 className='productName'>${prod.price}</h2>
            <Button as={Link} to={`/item/${prod.id}`} className="button" justify-content="center" variant="dark">Ver mas</Button>
        </div>
     </>
    )
}

export default Item;