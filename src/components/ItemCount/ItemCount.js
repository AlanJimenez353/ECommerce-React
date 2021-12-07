import React, { useState } from "react";
import "./ItemCount.css"
export const ItemCount= ( {initial=1} ) =>{

    const [cantidad,setCantidad]=useState(initial)
    const max=15
    
    const handleAdd =() =>{
        cantidad<max && setCantidad(cantidad+1)
    }
    
    const handleReduct= () =>{
       cantidad> 1  && setCantidad(cantidad-1)
    }


return(
<div>
    <div className="diver">
    <button className="btn btn-dark" onClick={handleReduct}> - </button>
    <span className="mx-2">{cantidad}</span>
    <button className="btn btn-dark" onClick={handleAdd}> + </button>
    </div>

    <div className="diver2">
        <button className="btn btn-dark my-2">Comprar Entradas</button>
    </div>
</div>

)
}