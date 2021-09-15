import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { dominject } from "../decorators/dom-inject.js";

export class NegociacaoController{

    @dominject('#data')
    private inputData : HTMLInputElement;
    @dominject('#valor')
    private inputValor : HTMLInputElement;
    @dominject('#quantidade')
    private inputQuantidade : HTMLInputElement;
    private negociacoes : Negociacoes = new Negociacoes();
    private negociacoesView : NegociacoesView = new NegociacoesView("#tabelaNegociacoes",true,'NegociacoesView');
    private mensagemView : MensagemView = new MensagemView("#mensagemView",false,'MensagemView');

    constructor(){
        
        // document.querySelector() pode retornar null tb, estão se a conf de compilação "strictNullChecks" estiver ativa, devo explicitar o retorno que espero
        
        /*this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;*/
        this.negociacoesView.update(this.negociacoes);

    }

    @logarTempoExecucao()
    public adicionaNegociacao() : void{

        const negociacao : Negociacao = this.criaNegociacao();
        
        if (!this.eHdiaDaSemana(negociacao.data)){
            this.mensagemView.update("informe somente dias úteis");
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();

        
    }

    importaDados() : void{
        
        /* 
        
        Com o fetch recupero o json com as movimentações. O retorno é uma Promisse<Response>
        faço o then com o Response "resp" e deste retorno o json. O retorno é uma Promisse<Any>
        faço o then esperando um array[any] e retorno este convertido em array de negociacoes. O retorno é uma Promisse<Any>
        sei que o retorno é um array de negociacoes, então atualizo a view
        */

        fetch("http://localhost:8080/dados").then(res => {
            return res.json();
        })
        .then((dados : any[]) => {
            return dados.map(dadoDeHoje => {
                return new Negociacao(
                    new Date(),
                    dadoDeHoje.vezes,
                    dadoDeHoje.montante);
            })

            
        })
        .then(listaNegociacao =>{
            
            for(let negociacao of listaNegociacao){
                this.negociacoes.adiciona(negociacao);
            }
        
            this.atualizaView();
        })        

        console.log('importou')}

    private eHdiaDaSemana(data : Date) : boolean{
        
        
        if ((data.getDay() === DiasDaSemana.DOMINGO) || (data.getDay() === DiasDaSemana.SABADO)){
            return false;
        }
    
        return true;
    }

    private atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação inserida com sucesso");
    }

    private criaNegociacao() : Negociacao {
        
        const exp = /-/g; //Expressão regular para pegar todos o '-'. o g é de global, pegar todos
        const dataString = this.inputData.value.replace(exp, ',');
        const quantidadeString = this.inputQuantidade.value;
        const valorString = this.inputValor.value;

        return Negociacao.criaDe(dataString, quantidadeString, valorString);
    }

    private limpaFormulario() : void {
        this.inputData.value = '';
        this.inputQuantidade.value = '0';
        this.inputValor.value = '0';
        this.inputData.focus;

    }
}