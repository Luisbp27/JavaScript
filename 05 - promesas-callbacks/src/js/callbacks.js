
const heroes = {
    capi: {
        nombre: 'Capitán américa',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Tener mucho dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion a las picaduras de araña'
    }
}

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    if (heroe) {
        callback(null, heroe);
    } else {
        callback(`No existe un héroe con el id ${id}`);
    }
    
}