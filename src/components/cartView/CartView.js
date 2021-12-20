import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";
import {BsTrashFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import "./CartView.css"
export const CartView = () => {

    const {cart,vaciarCarrito,totalCompra,removerDelCarrito}=useContext(cartContext)


    return(

        <div className="conteiner my-5">
                { cart.lenght === 0
                ?  <>
                    <h2>No tienes elementos en tu carrito</h2>
                    <Link to="/">Inicio</Link>
                   </> 
                :
                    <>
                    <h2>Tu Compra</h2>
                    <hr></hr>
                { cart.map( (el) => (
                    <div key={el.id}>
                        <h3>Evento :  {el.artista}</h3>
                        <p>Precio unitario:  {el.precio}</p>
                        <p>Cantidad Entradas:  {el.cantidad}</p>
                        <button className="btn btn-dark"
                            //Funcion anonima
                            onClick={ () =>{removerDelCarrito(el.id)} }>
                            <BsTrashFill/> -   Eliminar
                        </button>
                        <hr></hr>
                    </div>
                 ))
                }

                    <h4 >Total:  ${totalCompra()}</h4>
                    <hr></hr>
                    <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
                    <Link to="/FinalizarCompra" className="btn btn-success mx-3">Terminar compra</Link>
                    </>
            }
        </div>
    
    )
}