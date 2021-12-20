import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link} from 'react-router-dom'

export const NavBar = () =>{

    return(
        <header className="navbar">
         <Link to= "/"><h1>Lights Out</h1></Link>
         <nav>
             <ul style={{ paddingTop:20,paddingLeft:600 }}>
                 <li> <Link to ="/category/Rock"        style={{ textDecoration: 'none',color:'white' }}>              Rock       </Link></li>
                 <li> <Link to ="/category/Electronica" style={{ textDecoration: 'none',color:'white' }}>           Electronica   </Link></li>
                 <li> <Link to ="/category/Eventos"     style={{ textDecoration: 'none',color:'white' }}>             Eventos     </Link></li>                 
                 <li> <Link to ="/Api"                  style={{ textDecoration: 'none',color:'white' }}>               API       </Link></li>
             </ul>
         </nav>

            <CartWidget/>
        </header>
    )


}

export default NavBar