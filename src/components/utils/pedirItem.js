import { Fechas } from "../Data/Fechas";

export const pedirItem = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(Fechas.find(el=>el.id === id))
        },1000)
    })

}