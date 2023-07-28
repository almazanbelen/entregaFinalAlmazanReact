import NavBar from "./components/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Terapias from "./components/Terapias"


import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListConteiner";
import ItemDetailContainer from "./components/ItemDetailContainer";



//funcion principal

function App() {
  
  return (
    
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Routes>        
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/terapias" element={<Terapias/>}/>
          <Route exact path="/contacto" element={<Contacto/>}/>
          <Route exact path="/productos" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>                 
        <Footer/>
      </div>
     </BrowserRouter>
     
  );
}

//export
export default App;