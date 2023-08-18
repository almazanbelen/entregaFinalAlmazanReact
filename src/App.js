
import NavBar from "./components/menu/Menu";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Contacto from "./components/contacto/Contacto";
import Terapias from "./components/terapias/Terapias";
import ItemListContainer from "./components/itemListContainet/ItemListConteiner";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import CartProvider from "./context/cartProvider";

import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";

//funcion principal

function App() {

  return (
    
    <BrowserRouter>
      <div className="App">
        <CartProvider>
        <NavBar/>             
        <Routes>        
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/terapias" element={<Terapias/>}/>
          <Route exact path="/contacto" element={<Contacto/>}/>
          <Route exact path="/productos" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
        </CartProvider>             
        <Footer/>
      </div>
     </BrowserRouter>
     
  );
}

//export
export default App;