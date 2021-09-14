//decorator de propriedade
export function dominject(seletor : string){

    return function(        
        target : any,
        propertyKey : string
    ){

        //Usando o escopo da propriedade para fazer o cache 
        let elemento : HTMLElement;

        const getter = function(){
            
            if (!elemento){
                console.log(` MOdificando prototype ${target.constructor.name} adicionando Propriedade ${propertyKey}`);
                elemento = document.querySelector(seletor) as HTMLElement;
            }
            
            return elemento;
        }
    
        //Atribui dinamicamente o metodo 'get' no prototype para uma determinada propriedade
        Object.defineProperty(target, propertyKey, {get: getter});
    }
}

