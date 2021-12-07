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
                      <div className="navber">
                        <img src={fecha.img} alt={fecha.artista}/>
                        <h3>{fecha.artista}</h3>
                      
                      <div className="divers2">                  
                        <p>Lugar: {fecha.lugar}</p>
                      
                      </div>
                      
                      <div className="divers">
                        <p>Precio: ${fecha.precio} </p>
                      
                      </div>
                      {/* Antes de renderizar verifico si ya eciste un componente con el mismo id en el carrito para no agregar elementos repetidos*/}
                      {
                        !isInCart(fecha.id)
                          ?  <ItemCount increment={increment} decrement={decrement} onAdd={handleAdd} counter={counter}/>
                          :  <Link to="/cart" className="btn btn-dark">Terminar mi compra</Link>

                        }
                      
                      <hr></hr>
                      <div className="but">
                        <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
                      </div>
           </div>
    )

}
 