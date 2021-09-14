export function escapar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Metodo ${propertyKey}`);
        console.log(`--- Parametros ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log('escapou');
        }
        else {
            console.log('não escapou');
        }
        console.log(`--- retorno ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
