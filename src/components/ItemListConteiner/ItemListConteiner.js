import React,{ useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import { FechasList } from "../FechasList/FechasList";
import {collection,getDocs,query,where} from "firebase/firestore/lite"

export const ItemListConteiner = () =>{


///COMIENZO CON LAS FECHAS VACIAS
const [fechas,setFechas]= useState([])
const[loading,setLoading]=useState(false)

//Capturar parametros para retornar categoria mediante Router
const {categoryId} =useParams()


    useEffect(()=>{
            setLoading(true)
            //referencia a coleccion de mi database en firebase
            const fechasRef= collection(db,'fechas')
            //Verifico si existe category id, si existe se filtran los elementos de la 
            // base de datos que tengan el category id que recibimos por query, sino devolvemos la coleccion completa
            const q= categoryId ? query(fechasRef, where('category','==',categoryId)) : fechasRef
            getDocs(q)
            .then(resp =>{
                //Lo mapeamos para armar un array con cada objeto que esta almacenado en la base de datos
                const fechas=resp.docs.map((doc) =>{
                    return {
                        id:doc.id,
                        ...doc.data()
                }
                })
                console.log(fechas)
                setFechas(fechas)
            })
            .finally(()=> {
                setLoading(false)

            })
    },[categoryId])



// UNA VEZ CON LAS FECHAS CARGADAS LLAMO A  FUNCION QUE CREA TABLA DE FECHAS
// Utilizo el set loading para que los componentes del ItemList no se renderizen antes de estar cargados
    return(
         
            <>
            {
                loading
                ? <h2>Cargando...</h2>
                : <FechasList Fechas= {fechas}/>
            }
            </>
        
    )

}