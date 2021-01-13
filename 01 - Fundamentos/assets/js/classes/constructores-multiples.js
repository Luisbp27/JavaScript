class Persona {
    // Es una forma de tener multiconstructores en JS
    static porObjeto({nombre, apellido, pais}) {
        return new Persona(nombre, persona, pais);
    }

    constructor(nombre, aplleido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const   nombre1 = 'Melisa', 
        apellido1 = 'Flores',
        pais1 = 'España';

const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);

persona1.getInfo();
persona2.getInfo();