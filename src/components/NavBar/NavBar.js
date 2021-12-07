import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'

export const NavBar = () =>{

    return(
        <header className="navbar">
         <Link to= "/"><h1>Lights Out</h1></Link>
         <nav>
             <ul>
                 <li> <Link to ="/category/Rock">             Rock      </Link></li>
                 <li> <Link to ="/category/Electronica">  Electronica   </Link></li>
                 <li> <Link to ="/category/Eventos">        Eventos     </Link></li>                 
                 <li> <Link to ="/detail">                   Detail       </Link></li>
                 <li> <Link to ="/Api">                       API       </Link></li>
             </ul>
         </nav>

            <CartWidget/>
        </header>
    )


}

export default NavBar