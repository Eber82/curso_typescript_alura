export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    //private negociacoes : Negociacao[]  = []; Outra forma de escrever a declaração acima
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        //return [...this.negociacoes]; //Retorna uma nova lista com todos os itens do array "negociacoes"
        return this.negociacoes; //Retorna uma nova lista com todos os itens do array "negociacoes"
    }
}
