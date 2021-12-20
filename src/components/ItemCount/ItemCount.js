import React from "react";
import "./ItemCount.css"



    export const ItemCount = ({increment,decrement,onAdd, counter}) => {

        
        return(
            <div>
                <div className="diver">
                   
                    {/* Le agrego un condicional al classname de modo que si cumple o no cambia el estilo del boton */}
                    <button className={counter=== 0 ? "btn btn-danger" : "btn btn-dark" } onClick={decrement}> - </button>
                    <span className="mx-2" color="white">{counter}</span>
                    <button className="btn btn-dark" onClick={increment} color="white"> + </button>
                </div>
            
                <div className="diver2">
                    <button className="btn btn-dark my-2" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
            )
    }


