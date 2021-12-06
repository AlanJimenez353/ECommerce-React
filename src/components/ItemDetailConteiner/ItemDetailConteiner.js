import React,{ useEffect, useState } from "react";
import { Fechas } from "../Data/Fechas"
import { FechasList } from "../FechasList/FechasList";
import { pedirDatos } from "../utils/pedirDatos";
import {ItemDetailFecha} from '../ItemDetailFecha/ItemDetailFecha'
import { pedirItem } from "../utils/pedirItem";
import { useParams } from "react-router";

export const ItemDetailConteiner = () =>{

    ///COMIENZO CON LAS FECHAS VACIAS
const [fecha,setFecha]= useState([])
const[loading,setLoading]=useState(true)
const{itemId}=useParams()

//REALIZO RENDERIZACION Y CUANDO ACTUALIZA YA TENGO MIS FECHAS CARGADAS
useEffect(()=>{

    setLoading(true)
    pedirItem(Number(itemId))
        .then(resp =>setFecha(resp))
        .finally(()=>{
                setLoading(false)
            })
        
},[])

// UNA VEZ CON LAS FECHAS CARGADAS LLAMO A  FUNCION QUE CREA TABLA DE FECHAS
// Utilizo el set loading para que los componentes del ItemList no se renderizen antes de estar cargados
    return(
        <div> 
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemDetailFecha Fechas= {fecha}/>
            }
        </div>
    )

}