import React from "react";
import "./ItemCount.css"



    export const ItemCount = ({increment,decrement,onAdd, counter}) => {

        
        return(
            <div>
                <div className="diver">
                    <button className="btn btn-dark" onClick={decrement}> - </button>
                    <span className="mx-2">{counter}</span>
                    <button className="btn btn-dark" onClick={increment}> + </button>
                </div>
            
                <div className="diver2">
                    <button className="btn btn-dark my-2" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
            )
    }


/*
//Con useCounter Hook
*/