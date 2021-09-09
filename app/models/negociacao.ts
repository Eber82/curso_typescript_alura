export class Negociacao {

    

    /*Esse recurso, colocando explicitamente o modificador de acesso na declaração dos parametros 
    permite criar e atribuir automaticamente os atributos da classe*/
    
    //Declarando os atributos como public e readonly simplifica o código, não precisamos dos metodos "get" 

    constructor(private  _data : Date,
                public readonly quantidade : number, 
                public readonly valor : number){}


    //Programação Defensiva. a data tem que ser imutavel, mas o "private" e o "readonly" não protegem o objeto de ter seus metodos acessados
    public get data() : Date{
        const  data = new Date (this._data.getTime()); 
        return data;
    }
    
    public get volume() : number {
        return this.valor * this.quantidade;
    }
}