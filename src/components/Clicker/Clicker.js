import React, { useEffect, useState } from "react";
import { FyH } from './FyH'


export const Clicker = () =>{

    const [clicks,setClicks] = useState(0);

    const handleClick= () =>{ 
        setClicks(clicks +1);
    }

    useEffect(() => {

        console.log("componente montado")

        return()=>{
            console.log("clicker desmontado");
        }
    }, [clicks])




    return(
        <div onClick={handleClick}>
            <h2>Clicks: {clicks} </h2>
            <FyH/>
        </div>
    )
}