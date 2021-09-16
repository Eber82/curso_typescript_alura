export function imprimir(...imprimiveis) {
    for (let objeto of imprimiveis) {
        console.log(objeto.paraTexto());
    }
}
