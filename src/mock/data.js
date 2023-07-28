import Imagen from "../assets/Imagen.png"

const list = [
    {id:"1", producto: "Producto Uno", stock: "10", price: 3000, imagen: Imagen},
    {id:"2", producto: "Producto Dos", stock: "15", price: 4500, imagen: Imagen},
    {id:"3", producto: "Producto Tres", stock: "20", price: 1500, imagen: Imagen},
    {id:"4", producto: "Producto Cuatro", stock: "16", price: 2000, imagen: Imagen},
]
export function getProducts(){
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if (error){
                reject("No hay datos")
            }else{
                resolve(list)
            }
        },500)
    })
}

export function getItem(id){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },500)
    })
}

