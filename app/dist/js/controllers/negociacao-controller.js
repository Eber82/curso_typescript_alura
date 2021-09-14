var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { dominject } from "../decorators/dom-inject.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#tabelaNegociacoes", true, 'NegociacoesView');
        this.mensagemView = new MensagemView("#mensagemView", false, 'MensagemView');
        this.negociacoesView.update(this.negociacoes);
    }
    adicionaNegociacao() {
        const negociacao = this.criaNegociacao();
        if (!this.eHdiaDaSemana(negociacao.data)) {
            this.mensagemView.update("informe somente dias úteis");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }
    eHdiaDaSemana(data) {
        if ((data.getDay() === DiasDaSemana.DOMINGO) || (data.getDay() === DiasDaSemana.SABADO)) {
            return false;
        }
        return true;
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação inserida com sucesso");
    }
    criaNegociacao() {
        const exp = /-/g;
        const dataString = this.inputData.value.replace(exp, ',');
        const quantidadeString = this.inputQuantidade.value;
        const valorString = this.inputValor.value;
        return Negociacao.criaDe(dataString, quantidadeString, valorString);
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '0';
        this.inputValor.value = '0';
        this.inputData.focus;
    }
}
__decorate([
    dominject('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    dominject('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    dominject('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    logarTempoExecucao()
], NegociacaoController.prototype, "adicionaNegociacao", null);
