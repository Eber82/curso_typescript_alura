export class View {
    constructor(seletor, testeParametroOpcional, quemEnviou) {
        this.testeParametroOpcional = false;
        this.elemento = document.querySelector(seletor);
        console.log(testeParametroOpcional);
        console.log(quemEnviou);
        if (testeParametroOpcional) {
            this.testeParametroOpcional = testeParametroOpcional;
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
