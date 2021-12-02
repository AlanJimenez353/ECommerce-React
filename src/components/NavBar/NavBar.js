import { CarWidget } from '../CartWidget/CartWidget'
import './NavBar.css'


export const NavBar = () =>{

    return(
        <header className="navbar">
         <h1>Lights Out</h1>
         <nav>
             <ul>
                 <li>  Entradas </li>
                 <li>  Artistas </li>
                 <li>  Fechas   </li>
             </ul>
         </nav>

            <CarWidget/>
        </header>
    )


}

export default NavBar