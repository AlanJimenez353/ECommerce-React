import { ItemCount } from "../ItemCount/ItemCount";
import React from "react";
import { useNavigate } from "react-router";
import './ItemDetailFecha.css'


export const ItemDetailFecha =({Fechas}) =>{
    
    const navigate=useNavigate()
    
    const handleVolver=()=>{
        navigate(-1)
    }
    
    return(
                      <div className="navber">
                      <img src={Fechas.img} alt={Fechas.artista}/>
                      <h3>{Fechas.artista}</h3>
                      <div className="divers2">                  
                      <p>Lugar: {Fechas.lugar}</p>
                      </div>
                      <div className="divers">
                      <p>Precio: ${Fechas.precio} </p>
                      </div>
                      <ItemCount/>
                      <div className="but">
                      <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
                      </div>
           </div>
    )
    }
