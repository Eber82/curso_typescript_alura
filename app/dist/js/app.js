import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionaNegociacao();
    });
}
else {
    throw Error('Não foi possível iniciar a aplicação. Verifique o id do form');
}
