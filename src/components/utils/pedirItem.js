import { Fechas } from "../Data/Fechas"


export const pedirItem = ({id}) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve(Fechas.find(element => element.id === id))
        },2000)
    })
}