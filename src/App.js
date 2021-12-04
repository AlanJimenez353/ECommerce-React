import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {Clicker} from './components/Clicker/Clicker'
import {ItemCount} from './components/ItemCount/ItemCount'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner';
import {ItemDetailConteiner} from './components/ItemDetailConteiner/ItemDetailConteiner'
import { HpApi } from './components/HpApi/HpApi';

function App() {
  return (
    <div className="App">
     <NavBar />
     {/*} 
      <br></br>
      <h2>Proyecto React Venta de entradas</h2>
      <Clicker/>
      <ItemCount/>*/}
      <ItemListConteiner/>
      <hr/>
      <h2>ITEM DETAIL</h2>
      <hr/>
      <ItemDetailConteiner/>
      <hr/>
      <h2>API GET Y CUSTOM HOOK</h2>
      <hr/>
      <HpApi/>
    </div>
  );
}

export default App;