import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
