import './App.css';
import {NavBar} from './components/NavBar/NavBar'
//import {Clicker} from './components/Clicker/Clicker'
//import {ItemCount} from './components/ItemCount/ItemCount'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner';
import {ItemDetailConteiner} from './components/ItemDetailConteiner/ItemDetailConteiner'
import { HpApi } from './components/HpApi/HpApi';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { cartContext, CartProvider } from './components/context/cartContext';
import { useState } from 'react';
import { CartView } from './components/cartView/CartView';
import { FinalizarCompra } from './components/FinalizarCompra/FinalizarCompra';


function App() {
  


  

  return (

    <CartProvider > 
        <BrowserRouter>  
          <NavBar />
            <Routes>

                <Route path="/" element={<ItemListConteiner/>} />
                <Route path="/detail/:itemId" element={<ItemDetailConteiner/>}/>
                <Route path="/Api" element={<HpApi/>}/>

                {/*Sin terminar*/}
                <Route path="/category/:categoryId" element={<ItemListConteiner/>}/>
                <Route path="/cart" element={<CartView/>}/>
                <Route path="/FinalizarCompra" element={<FinalizarCompra/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes> 
        </BrowserRouter>
      </CartProvider>
  );
}

export default App;