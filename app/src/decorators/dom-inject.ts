//decorator de propriedade
export function dominject(seletor : string){

    return function(        
        target : any,
        propertyKey : string
    ){
        console.log(` MOdificando prototype ${target.constructor.name}`);
        console.log(` Propriedade ${propertyKey}`);
        const getter = function(){
            const elemento = document.querySelector(seletor);
            return elemento;
        }
    
        //Atribui dinamicamente o metodo 'get' no prototype para uma determinada propriedade
        Object.defineProperty(target, propertyKey, {get: getter});
    }
}

