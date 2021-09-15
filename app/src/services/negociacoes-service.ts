import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{

    obterNegociacoesDoDia() : Promise<Negociacao[]>{
                /* 
        
        Com o fetch recupero o json com as movimentações. O retorno é uma Promisse<Response>
        faço o then com o Response "resp" e deste retorno o json. O retorno é uma Promisse<Any>
        faço o then esperando um array[any] e retorno este convertido em array de negociacoes. O retorno é uma Promisse<Any>
        sei que o retorno é um array de negociacoes, então atualizo a view
        */

        return fetch("http://localhost:8080/dados")
        .then(res => res.json())
        .then((dados : NegociacaoDoDia[]) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(
                    new Date(),
                    dadoDeHoje.vezes,
                    dadoDeHoje.montante);
            })
        })
    }

}