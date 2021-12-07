import React,{ useContext, useEffect, useState } from 'react';
import {ItemDetailFecha} from '../ItemDetailFecha/ItemDetailFecha'
import { useParams } from 'react-router'
import { pedirItem} from'../utils/pedirItem'

export const ItemDetailConteiner = () =>{

    ///COMIENZO CON LAS FECHAS VACIAS
    const [fecha,setFecha]= useState([])
    const[loading,setLoading]=useState(true)
    
    // Recibo id desde parametro para filtar el item a detallar
    const{itemId}= useParams()


    //REALIZO RENDERIZACION Y CUANDO ACTUALIZA YA TENGO MIS FECHAS CARGADAS
    useEffect(()=>{

        setLoading(true)

        pedirItem( Number(itemId) )
            .then(resp => setFecha(resp))
            .finally(()=>{
                    setLoading(false)
                })
            
    },[itemId])

// UNA VEZ CON LAS FECHAS CARGADAS LLAMO A  FUNCION QUE CREA TABLA DE FECHAS
// Utilizo el set loading para que los componentes del ItemList no se renderizen antes de estar cargados
    return(
        <div> 
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemDetailFecha fecha= {fecha}/>
            }
        </div>
    )

}