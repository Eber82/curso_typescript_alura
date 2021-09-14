export function dominject(seletor) {
    return function (target, propertyKey) {
        console.log(` MOdificando prototype ${target.constructor.name}`);
        console.log(` Propriedade ${propertyKey}`);
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
