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

class Heroe extends Persona {
    clan;

    constructor(nombre, codigo, frase) {
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers'
    }
}

const spiderman = new Heroe('Peter Parker', 'Spider', 'Soy tu amigo vecino Spiderman');

