let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo', juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length - 1];

// Aplica un acción a cada valor del array
juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

// Añade un elemento al final del array
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

// Añade un elemento al principio del array
juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// Elimina el último elemento del array
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// Elimina un elemento de una posición específica
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

// Saber en que posición se encuentra un elemento
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});