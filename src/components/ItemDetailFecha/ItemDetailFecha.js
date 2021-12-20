import { ItemCount } from "../ItemCount/ItemCount";
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import './ItemDetailFecha.css'
import { useCounter } from "../Hooks/useCounter";
import { cartContext } from "../context/cartContext";
import { Link } from "react-router-dom";


export const ItemDetailFecha =({fecha}) => {

    const max=20;


    //Agregar al Carrito
    const{agregarAlCarrito,isInCart}=useContext(cartContext)

    //ItemCounter
    const {counter,increment,decrement} = useCounter(1,max,0)

    //Navigate
    const navigate=useNavigate()    
    const handleVolver= () => {
        navigate(-1)
    }

    const handleAdd = () => {
      counter > 0 && agregarAlCarrito({
        id: fecha.id,
        precio: fecha.precio,
        artista: fecha.artista,
        cantidad: counter

      })  

    }

    
    return(
      <div className="detail">
                      <div className="navber">
                        <div className="texting">
                        <img src={fecha.img} alt={fecha.artista}/>
                        <h3 className="artist">{fecha.artista}</h3>
                      
                      <h5>
                        <p>Lugar: {fecha.lugar}</p>
                       </h5>                     
                      <h5>
                        <p>Precio: ${fecha.precio} </p>
                      
                      </h5>
                      {/* Antes de renderizar verifico si ya eciste un componente con el mismo id en el carrito para no agregar elementos repetidos*/}
                      {
                        !isInCart(fecha.id)
                          ?  <ItemCount 
                                increment={increment} 
                                decrement={decrement}
                                onAdd={handleAdd}
                                counter={counter}/>
                          :  <Link to="/cart" className="btn btn-dark">Terminar mi compra</Link>

                        }
                        </div>
                 </div>
                  <hr></hr>
                      <div className="but">
                        <button className="btn btn-danger     margin-left: auto;    margin-right: auto;
" onClick={handleVolver}>Seguir comprando</button>
                      </div>

          
   </div>
    )

}
 