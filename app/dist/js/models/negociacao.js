export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    paraTexto() {
        return `
            Data : ${this._data}
            Quantidade : ${this.quantidade}
            Valor : ${this.valor}
        `;
    }
    ehIgual(negociacao) {
        return ((this.data.getDate() === negociacao.data.getDate()) &&
            (this.data.getMonth() === negociacao.data.getMonth()) &&
            (this.data.getFullYear() === negociacao.data.getFullYear()));
    }
}
//# sourceMappingURL=negociacao.js.map