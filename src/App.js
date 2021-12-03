import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {Clicker} from './components/Clicker/Clicker'
import {ItemCount} from './components/ItemCount/ItemCount'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner';

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
    </div>
  );
}

export default App;