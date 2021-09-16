export class View {
    constructor(seletor, testeParametroOpcional, quemEnviou) {
        this.testeParametroOpcional = false;
        const element = document.querySelector(seletor);
        if (element) {
            this.elemento = element;
        }
        else {
            throw Error(`Elemento ${seletor} não existe no DOM`);
        }
        if (testeParametroOpcional) {
            this.testeParametroOpcional = testeParametroOpcional;
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map