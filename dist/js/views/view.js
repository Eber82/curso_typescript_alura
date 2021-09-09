export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        throw console.error("A classe filha precisa reescrever o metodo 'template' da classe pai 'View'");
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
