let a = 10;
let b = a;

console.log(a, b);

let juan = {nombre: 'Juan'};
// Los tres puntos "separa los elementos". Permite crear un objeto a partir del 
// anterior y luego poder modificarlo sin modificar el anterior
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

//Otro uso de los tres puntos
const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

// Con arrays
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread:');
const otrasFrutas = [...frutas];
console.timeEnd('spread:');

console.time('slice:');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice:');

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});