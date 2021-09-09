import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        //Essa notação com as aspas simples invertidas chama-se "template string", 
        //que dentre outras coisas permite escrever a string com quebra de linha sem usar o operador + e a interpolação do código (uso do model.lista().map... no meio da string)
        return `
        <table class = "table table-hover table-bordered">
            <thead>
                <tr>
                    <td>DATA</td>
                    <td>VALOR</td>
                    <td>QUANTIDADE</td>
                </tr>
                <tbody>
                
                    ${model.lista().map(negociacao => {
            return `
                            <tr>
                                <td>${this.formatarData(negociacao.data)}</td> 
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.quantidade}</td> 
                            </tr>
                        `;
        }).join('')}
                
                </tbody>
            
            </thead>
        </table>`;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    formatarData(data) {
        return Intl.DateTimeFormat().format(data);
    }
}
