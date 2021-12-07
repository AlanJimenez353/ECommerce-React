import React, { useContext } from "react";
import { cartContext } from "../context/cartContext";

export const CartView = () => {

    const {cart}=useContext(cartContext)


    return(
        <div className="conteiner my-5">
            <h2>Cart View</h2>
            <hr></hr>


            {cart.map((el)=> {
                <div key={el.id}>
                    <h3>{el.nombre}</h3>
                    <p>{el.precio}</p>
                    <p>{el.cantidad}</p>

                </div>
            })}
        </div>

    )
}