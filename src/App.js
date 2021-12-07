import './App.css';
import {NavBar} from './components/NavBar/NavBar'
//import {Clicker} from './components/Clicker/Clicker'
//import {ItemCount} from './components/ItemCount/ItemCount'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner';
import {ItemDetailConteiner} from './components/ItemDetailConteiner/ItemDetailConteiner'
import { HpApi } from './components/HpApi/HpApi';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'


function App() {
  return (

      <BrowserRouter>
        
        <NavBar />
        <Routes>

            <Route path="/" element={<ItemListConteiner/>} />
            <Route path="/detail/:itemId" element={<ItemDetailConteiner/>}/>
            <Route path="/Api" element={<HpApi/>}/>

            {/*Sin terminar*/}
            <Route path="/category/:categoryId" element={<ItemListConteiner/>}/>
            <Route path="/cart" element={<ItemDetailConteiner/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes> 
      </BrowserRouter>

  );
}

export default App;