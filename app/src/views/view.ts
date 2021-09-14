import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View <T>{

    protected elemento : HTMLElement;
    private testeParametroOpcional : boolean = false;
    
    constructor(seletor : string, testeParametroOpcional? : boolean, quemEnviou? : string){
        const element = document.querySelector(seletor); 
        
        //Outra forma de tratar o retorno null do "document.querySelector"
        if (element){
            this.elemento = element as HTMLElement;
        }  else{
            throw Error(`Elemento ${seletor} não existe no DOM`)
        } 
        

        
        if (testeParametroOpcional){
            this.testeParametroOpcional = testeParametroOpcional;
            //console.log(testeParametroOpcional);
        }
    }

    protected abstract template(model : T) : string
        
    
    @logarTempoExecucao(true)
    update(model: T) : void{
        
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}