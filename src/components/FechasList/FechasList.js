import React from "react";
//import { Fechas } from "../Data/Fechas";
import { ItemFecha } from "../ItemFecha/ItemFecha";
import "./FechasList.css"

export const FechasList =({Fechas}) =>{
    
    
    return(
        <div className="conteiner">
            <div className="titt">
            <h2 >A donde iras hoy</h2>
            </div>
            <hr/>
            <div className="container">           
             <div className="conteiner row mx-0 ">

                {
                    //Recorro el mapa y por cada iteracion devuelvo un objeto (fecha) con ese objeto llamo a la ItemFecha 
                    //que retorna el componente y se agrega a el conteiner
                    Fechas.map((element)=> <ItemFecha fecha={element}/>)
                }
                </div>
             </div>

            </div>
    )
    }
