import { Fechas } from "../Data/Fechas"


export const pedirDatos = () => {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve (Fechas)    
        }, 2000);
                    
    })
}
