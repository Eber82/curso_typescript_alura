export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this);
    }
    ehIgual(negociacoes) {
        return (this.negociacoes === negociacoes.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map