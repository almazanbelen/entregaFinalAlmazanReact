// import { useEffect, useState } from "react";
// import { getItem } from "../../mock/data";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import useGetDoc from "../../hooks/useGetDoc";


function ItemDetailContainer(){

    const { id } = useParams()
    const {data} = useGetDoc(id)

    return (

        <ItemDetail data={data}/>
    )
    
//     const [producto, setProducto] = useState({})

    
//     useEffect(()=>{
//         getItem(id)
//         .then((res)=> setProducto(res))
//         .catch ((error)=> console.log(error))

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     },[])
//     return(
//         <div>
//             <ItemDetail producto={producto}/>
//         </div>
//     )
}

export default ItemDetailContainer;