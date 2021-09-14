export function logarTempoExecucao(emSegundos : boolean = false){
    return function(
        target : any,
        propertyKey : string,
        descriptor : PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value; //Guarda o metodo original
        //reescreve o novo comportamento do metodo
        descriptor.value = function(...args : any[]){
            let divisor = 1;
            let unidade = "milisegundos"; 
            
            if (emSegundos){
                divisor = 1000;
                unidade = "segundos"; 
            }

            const t1 = performance.now();
            //Recurso do java script para passar o contexto "this" e os eventuais parametros para execução do metodo original 
            const retorno = metodoOriginal.apply(this,args); 
            const t2 = performance.now();
            console.log(`Tempo de execução de ${propertyKey} : ${t1 - t2/divisor} ${unidade}` );
            retorno
        }
    }
}