function saludar(nombre){
    // Hacer referencia a todos los elementos pasados por parámetro
    console.log(arguments);
    console.log('Hola '+nombre);
}

// Es lo mismo que arriba pero así conseguimos que no se edite durante la ejecución
const saludar2 = function(nombre) {
    console.log('Hola '+nombre);
}

// También se pueden pasar argumentos por parámetro
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

// Función de flecha se puede escribir así y sustituye al return
const sumar = (a,b) => a+b;

const getAleatorio = () => Math.random();

saludar('Fernando');
saludar2('Fernando');
saludarFlecha();
console.log(sumar);
console.log(getAleatorio);