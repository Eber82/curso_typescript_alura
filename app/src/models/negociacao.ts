import { Imprimivel } from "../interfaces/imprimivel.js";
import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {

    

    /*Esse recurso, colocando explicitamente o modificador de acesso na declaração dos parametros 
    permite criar e atribuir automaticamente os atributos da classe*/
    
    //Declarando os atributos como public e readonly simplifica o código, não precisamos dos metodos "get" 

    constructor(private  _data : Date,
                public readonly quantidade : number, 
                public readonly valor : number){}



    public static criaDe(dataString : string, quantidadeString : string, valorString : string ) : Negociacao{

        const exp = /-/g; //Expressão regular para pegar todos o '-'. o g é de global, pegar todos
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(data,quantidade,valor);
    }

    //Programação Defensiva. a data tem que ser imutavel, mas o "private" e o "readonly" não protegem o objeto de ter seus metodos acessados
    public get data() : Date{
        const  data = new Date (this._data.getTime()); 
        return data;
    }
    
    public get volume() : number {
        return this.valor * this.quantidade;
    }

     public paraTexto() : string{
        return `
            Data : ${this._data}
            Quantidade : ${this.quantidade}
            Valor : ${this.valor}
        `;
    }

    public ehIgual(negociacao : Negociacao):boolean{

        return ((this.data.getDate() === negociacao.data.getDate()) &&
            (this.data.getMonth() === negociacao.data.getMonth()) &&
            (this.data.getFullYear() === negociacao.data.getFullYear()));
    }

}