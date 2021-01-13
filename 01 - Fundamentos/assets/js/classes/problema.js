function Persona (nombre, edad) {
    console.log('Se ejecutó esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona('María', 18);
console.log(maria);
maria.imprimir();