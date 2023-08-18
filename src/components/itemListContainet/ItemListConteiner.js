// import { useEffect, useState } from 'react';

// import { getProducts } from '../../mock/data';

import "./styles-item-list.css"
import ItemList from '../itemList/ItemList';
import useGetColl from '../../hooks/useGetColl';


//esta funcion suma los productos de cada cart
function ItemListContainer ({titulo}) {

    const {documents} = useGetColl()
    
    return (    
    <>
        <div>
            <ItemList productos={documents}/>     
        </div>
    </>
    )
}

//export
export default ItemListContainer;