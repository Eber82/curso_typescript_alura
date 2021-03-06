import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { dominject } from "../decorators/dom-inject.js";
import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";

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
    private negociacoesService : NegociacoesService = new NegociacoesService();

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
        imprimir(negociacao, this.negociacoes);
        this.atualizaView();
        this.limpaFormulario();

        
    }

    importaDados() : void{
    
        this.negociacoesService.obterNegociacoesDoDia()
        
        .then(listaNegociacao => {
        
            return listaNegociacao.filter(negociacaoDoDia => {
                    return !this.negociacoes
                    .lista()
                    .some(negociacao => negociacao.ehIgual(negociacaoDoDia));
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