const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For tradicional');

for(let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.log('For in');

// lleva acabo lo que hay dentro del for durante la longitud del array
for(let i in heroes) {
    console.warn(heroes[i]);
}

console.warn('For of');

for(let heroe of heroes) {
    console.log(heroes[heroe]);
}