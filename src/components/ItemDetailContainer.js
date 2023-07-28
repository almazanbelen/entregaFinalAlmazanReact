import { useEffect, useState } from "react";
import { getItem } from "../mock/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    
    useEffect(()=>{
        getItem(id)
        .then((res)=> setProducto(res))
        .catch ((error)=> console.log(error))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer;