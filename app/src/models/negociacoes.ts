
import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {

     private negociacoes : Array<Negociacao>  = [];
     //private negociacoes : Negociacao[]  = []; Outra forma de escrever a declaração acima

     public adiciona(negociacao : Negociacao){
        this.negociacoes.push(negociacao);
     }

     public lista() : ReadonlyArray<Negociacao>{ // ReadonlyArray retorna um array que não poderá ser alterado, somente leitura
        
        //return [...this.negociacoes]; //Retorna uma nova lista com todos os itens do array "negociacoes"
        return this.negociacoes; //Retorna uma nova lista com todos os itens do array "negociacoes"
     }

     public paraTexto() : string{
      return JSON.stringify(this);
     }

     public ehIgual(negociacoes: Negociacoes): boolean {
         return (this.negociacoes === negociacoes.lista());
      }
}

