export class View <T>{

    protected elemento : HTMLElement;

    constructor(seletor : string){
        this.elemento = document.querySelector(seletor);
    }

    template(model : T) : string{
        throw console.error("A classe filha precisa reescrever o metodo 'template' da classe pai 'View'");
        
    }

    update(model: T) : void{
        
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}