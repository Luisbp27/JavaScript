const dia = 1;
const horaActual = 11;

let horaApertura;
let mensaje;

// ? = retorno del if, : = retorno del else
horaApertura = ([0, 6].includes(dia)) ? 9 : 1;

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : 'Está cerrado, abrimos a las '+horaApertura;

console.log(horaApertura, mensaje);