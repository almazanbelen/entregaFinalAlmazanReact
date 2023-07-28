import { useEffect, useState } from 'react';

import { getProducts } from '../mock/data';

import "./styles-item-list.css"
import ItemList from './ItemList';


//esta funcion suma los productos de cada cart
function ItemListContainer ({titulo}) {
    //Uso de array
    const [productos, setProductos] = useState([])

    //logica 
    useEffect(()=>{
        getProducts()
        .then((res)=> setProductos(res))
        .catch((error)=> console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  

    return (    
    <>
        <div>
            <ItemList productos={productos}/>     
        </div>
    </>
    )
}

//export
export default ItemListContainer;