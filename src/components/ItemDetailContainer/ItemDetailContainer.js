import React,{useEffect,useState} from "react";
import { pedirDatos } from "../utils/pedirDatos";

export const ItemDetailContainer= ()=>{

    const [item,setItem] =useState(null)

    useEffect(() => {
        pedirDatos()
            .then(resp => setItem(resp))
    }, []);

    return(
        <div>
            {item && <itemDetail item={item}/>}
        </div>
    )



}