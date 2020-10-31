const hoy = new Date();
let dia = hoy.getDay();

console.log(dia);

if(dia === 0) {
    console.log('Domingo');
}else if(dia === 1) {
    console.log('Lunes');
    // Tendriamos que hacer una cadena de else ifs para toda la semana
}else {
    console.log('No es ningún día');
}

let dia = 3;
const stringDias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

console.log(stringDias[dia]);
