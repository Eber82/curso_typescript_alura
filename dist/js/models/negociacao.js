export class Negociacao {
    /*Esse recurso, colocando explicitamente o modificador de acesso na declaração dos parametros
    permite criar e atribuir automaticamente os atributos da classe*/
    //Declarando os atributos como public e readonly simplifica o código, não precisamos dos metodos "get" 
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //Programação Defensiva. a data tem que ser imutavel, mas o "private" e o "readonly" não protegem o objeto de ter seus metodos acessados
    getData() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
