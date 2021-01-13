const elMayoor = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log (elMayoor(20, 15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange', 
    amigo ? 'Thor' : 'Loki'
];

console.log(amigosArr);

const nota = 65; // Necesitamos saber qué nota es
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' : 
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log({nota, grado});