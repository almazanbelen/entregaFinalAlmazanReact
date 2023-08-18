import Imagen from "../../assets/Imagen.png"
import "./itemListOutstanding.css"

function ItemListOutstanding({title}){
    return(
        <div className='cartDescription'>
            <img className= "imgDefault" src={Imagen} alt= "imagen default"/>
            <h1 className='productName'>{title}</h1>
            <h2 className='productName'>Descripcion del producto</h2>            
        </div>
    )
}
export default ItemListOutstanding;