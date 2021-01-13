class Persona {
    static conteo = 0;
    static get getConteo() {
        return Persona.conteo;
    }

    nombre;
    codigo;
    frase;

    constructor (nombre, codigo, frase) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona.conteo++;
    }

    set setComida(comida) {
        this.comida = comida;
    }

    get getComida() {
        return this.comida;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    frase() {
        console.log(`${this.nombre} y mi frase es ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigo vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Hola soy Ironman');

console.log(spiderman);
console.log(ironman);

spiderman.quienSoy();