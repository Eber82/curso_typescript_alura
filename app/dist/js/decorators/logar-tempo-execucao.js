export function logarTempoExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = "milisegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de execução de ${propertyKey} : ${t1 - t2 / divisor} ${unidade}`);
            retorno;
        };
    };
}
//# sourceMappingURL=logar-tempo-execucao.js.map