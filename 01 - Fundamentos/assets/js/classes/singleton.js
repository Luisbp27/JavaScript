class Singleton {
    static instancia;
    nombre = '';

    constructor(nombre = '') {
        // Porqué utilizamos la doble negación
        const a = undefined;
        console.log(a);
        console.log(!a);
        console.log(!!a);
        ////

        // Si ya existe una instancia, devolvemos dicha instancia
        if(!!Singleton.instancia) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia1 es: ${instancia3.nombre}`);