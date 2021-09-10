export abstract class View <T>{

    protected elemento : HTMLElement;
    private testeParametroOpcional : boolean = false;
    
    constructor(seletor : string, testeParametroOpcional? : boolean, quemEnviou? : string){
        this.elemento = document.querySelector(seletor);
        console.log(testeParametroOpcional);
        console.log(quemEnviou);
        if (testeParametroOpcional){
            this.testeParametroOpcional = testeParametroOpcional;
            //console.log(testeParametroOpcional);
        }
    }

    protected abstract template(model : T) : string
        
    update(model: T) : void{
        
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}