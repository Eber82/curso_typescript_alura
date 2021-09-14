import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller : NegociacaoController = new NegociacaoController();
const form = document.querySelector('.form');

//OUtra forma de verificar se o valor da variavel é null
if (form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionaNegociacao();
    });
}else{
    throw Error('Não foi possível iniciar a aplicação. Verifique o id do form')
    
}


