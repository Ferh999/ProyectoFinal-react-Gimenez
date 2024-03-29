

import Header from "./components/Header/Header";

import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./components/ItemDetailConteiner/ItemDetailConteiner";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import Login from "./components/Login/Login";



function App() {


  return (
    <div className="App">
      
      <BrowserRouter>
      <CartContextProvider>
      <Header />
      
      <Routes>
        <Route path="/" element={ <ItemListConteiner />} />
        <Route path="/category/:categoryName" element={ <ItemListConteiner />} />
        <Route path="/itemDetail/:id" element={ <ItemDetailConteiner />}/>
        <Route path="/cart" element ={ <Cart /> }/>
        <Route path="/login" element ={ <Login /> }/>
        <Route path="*" element={<h4>Error, 404 not found</h4>}/>

      </Routes>
      </CartContextProvider>
      
    
      </BrowserRouter>
    </div>
  );
}

export default App;
