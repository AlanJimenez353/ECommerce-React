import { ItemCount } from "../ItemCount/ItemCount";
import React from "react";
import { useNavigate } from "react-router";
import './ItemDetailFecha.css'
import { useCounter } from "../Hooks/useCounter";


export const ItemDetailFecha =({fecha}) => {

    const max=20;
    //ItemCounter
    const {counter,increment,decrement} = useCounter(1,max,0)

    //Navigate
    const navigate=useNavigate()    
    const handleVolver= () => {
        navigate(-1)
    }

    const handleAdd = () => {
        //cantidad<max && setCantidad(cantidad+1)
        console.log("Item Agregado",{
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
                      <ItemCount increment={increment} decrement={decrement} onAdd={handleAdd} counter={counter}/>
                      
                      <div className="but">
                        <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
                      </div>
           </div>
    )

}
