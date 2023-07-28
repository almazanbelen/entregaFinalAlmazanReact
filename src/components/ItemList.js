import Item from "./Item";

function ItemList ({productos}){
    
    return(
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
            {productos.map((prod)=> <Item key={prod.id} prod={prod}/>)}
        </div>
    )
    
}

export default ItemList;