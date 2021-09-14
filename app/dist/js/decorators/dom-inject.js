export function dominject(seletor) {
    return function (target, propertyKey) {
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log(` MOdificando prototype ${target.constructor.name} adicionando Propriedade ${propertyKey}`);
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
