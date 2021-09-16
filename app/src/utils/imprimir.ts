import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...imprimiveis : Imprimivel[]){

    for (let objeto of imprimiveis){
        console.log(objeto.paraTexto());
    }
}