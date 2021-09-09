import { Negociacao } from "./negociacao.js";

export class Negociacoes{

     private negociacoes : Array<Negociacao>  = [];
     //private negociacoes : Negociacao[]  = []; Outra forma de escrever a declaração acima

     adiciona(negociacao : Negociacao){
        this.negociacoes.push(negociacao);
     }

     lista() : ReadonlyArray<Negociacao>{ // ReadonlyArray retorna um array que não poderá ser alterado, somente leitura
        
        //return [...this.negociacoes]; //Retorna uma nova lista com todos os itens do array "negociacoes"
        return this.negociacoes; //Retorna uma nova lista com todos os itens do array "negociacoes"
     }
}

