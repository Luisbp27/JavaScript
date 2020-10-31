let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibú, California'
    }
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Latitud', personaje.coords.lat);
console.log('Nº Trajes', personaje.trajes.length);
console.log('Útlimo traje', personaje.trajes.length - 1);

const x = 'vivo';
console.log('Vivo', personaje[x]);

// Más detalles

// Borrar atributo edad
delete personaje.edad;

//Crear nuevo atributo
personaje.casado = true;

// Convertir objeto en un array
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Para mantener los atributos y no poder modificarlos, excepto los objetos de los objetos
// Para congelar objetos de objetos deberíamos hacer un freeze de estos
Object.freeze(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);


