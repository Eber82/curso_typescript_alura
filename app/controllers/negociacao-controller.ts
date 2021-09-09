import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class NegociacaoController{

    private inputData : HTMLInputElement;
    private inputValor : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private negociacoes : Negociacoes = new Negociacoes();
    private negociacoesView : NegociacoesView = new NegociacoesView("#tabelaNegociacoes");
    private mensagemView : MensagemView = new MensagemView("#mensagemView");

    constructor(){
        this.inputData = document.querySelector("#data");
        this.inputValor = document.querySelector("#valor");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.negociacoesView.update(this.negociacoes);

    }

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
        const data = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(data,quantidade,valor);

    }

    private limpaFormulario() : void {
        this.inputData.value = '';
        this.inputQuantidade.value = '0';
        this.inputValor.value = '0';
        this.inputData.focus;

    }
}