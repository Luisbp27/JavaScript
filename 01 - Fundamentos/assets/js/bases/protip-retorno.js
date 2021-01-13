// function crearPersona(nombre, apellido) {
    // return { nombre, apellido }
// }

const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona('Luis', 'Barca');
console.log(persona);

function imprimirArgumentos(){
    console.log(arguments);
}

// Crea un array con todos los elementos que le pasamos por parámetro
const imprimirArgumentos2 = (...args) => {
    // console.log(args)
    return args;
}

const [casado, vivo, nombre, saludo] = imprimirArgumentos2(10, true, false, 'Luis', 'Barca');
console.log({casado, vivo, nombre, saludo});