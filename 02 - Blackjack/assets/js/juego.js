/**
 * Las cartas están en inglés
 * 2C = Two of Cubles
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

 // Función anónima autoinvocada, se conoce como el PATRÓN MÓDULO
const miModulo = (() => {
    'use strict' // Obligamos a JavaScript a ser estricto con el código

    let     deck = [];
    const   tipos = ['C', 'D', 'H', 'S'],
            especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias del HTML
    const   btnNuevo = document.querySelector('#btnNuevo'),
            btnPedir = document.querySelector('#btnPedir'),
            btnDetener = document.querySelector('#btnDetener');

    const   puntosHTML = document.querySelectorAll('small'),
            divCartasJugadores = document.querySelectorAll('.divCartas');

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];

        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnDetener.disabled = false;
        btnPedir.disabled = false;
    }

    // Esta funcion crea una nueva baraja
    const crearDeck = () => {
        // Limpiamos el deck antes de crear uno nuevo
        deck = [];

        for(let i = 2; i <= 10; i++) {
            for(let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for(let tipo of tipos) {
            for(let esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        // Shuffle es una funcion de la libreria undergroundjs y sortea el array de cartas
        return _.shuffle(deck);
    }

    // Esta función permite coger una carta
    const cogerCarta = () => {
        // Tenemos en cuenta si el deck está vacío en algún momento
        if(deck.length === 0){
            throw 'No hay cartas en el deck';
        }

        return deck.pop();
    }

    const valorCarta = (carta) => {
        // En javascript se puede tratar a los strings como un array
        const valor = carta.substring(0, carta.length - 1);
        let puntos = 0;
        // Devuelve un true si NO es un número
        return (isNaN(valor) ) ? 
            (valor === 'A') ? 11 : 10 
                : valor * 1;
    }

    const acumularPuntos = (turno, carta) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    const crearCarta = (turno, carta) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta)
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosOrdenador] = puntosJugadores;

        setTimeout(() => {
            if(puntosOrdenador == puntosMinimos) {
                alert('Nadie gana');
            }else if(puntosMinimos > 21) {
                alert('Has perdido :(');
            }else if(puntosOrdenador > 21) {
                alert('Has ganado!!');
            }else {
                alert('Has perdido :(');
            }
        }, 10);
    }

    // Eventos ordenador
    const turnoOrdenador = (puntosMinimos) => {
        let puntosOrdenador;
        
        do { 
            const carta = cogerCarta();

            puntosOrdenador = acumularPuntos(puntosJugadores.length - 1, carta);
            crearCarta(puntosJugadores.length - 1, carta);

        }while ((puntosOrdenador <= puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();

        btnDetener.disabled = true;
        btnNuevo.disabled = false;
    }

    // Eventos botón Pedir
    btnPedir.addEventListener('click', () => {
        const   carta = cogerCarta(),
                puntosJugador = acumularPuntos(0, carta);
        
        crearCarta(0, carta);

        if(puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoOrdenador(puntosJugador);

        }else if(puntosJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoOrdenador(puntosJugador);
        }
    });

    // Eventos del botón Detener
    btnDetener.addEventListener('click', () => {
        btnNuevo.disabled = true;
        btnPedir.disabled = true;

        turnoOrdenador(puntosJugadores[0]);
    });

    // Eventos del botón Nuevo Juego
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };

})();