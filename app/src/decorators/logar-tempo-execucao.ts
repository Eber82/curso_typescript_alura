export function logarTempoExecucao(){
    return function(
        target : any,
        propertyKey : string,
        descriptor : PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value; //Guarda o metodo original
        //reescreve o novo comportamento do metodo
        descriptor.value = function(...args : any[]){
            const t1 = performance.now();
            //Recurso do java script para passar o contexto "this" e os eventuais parametros para execução do metodo original 
            const retorno = metodoOriginal.apply(this,args); 
            const t2 = performance.now();
            console.log(`Tempo de execução de ${propertyKey} : ${t1 - t2/1000} segundos` );
            retorno
        }
    }
}