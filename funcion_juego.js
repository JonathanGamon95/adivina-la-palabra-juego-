let PALABRA_DECIFRABLE = document.getElementById("palabra");
const LISTA_BOTONES = document.querySelector(".cont_teclas");
const BOTON_NUEVA_PALABRA = document.getElementById("boton_nueva_palabra");
let VIDAS_JUGADOR = document.getElementById("vidas_jugador");


//valores iniciales:
const CONT_PALABRAS = ["bicicleta", "montaña", "pajaro", "flor", "computadora", "playa", "gato", "libro", "silla", "lluvia", "guitarra", "automovil", "avion", "casa", "perro", "felicidad", "caramelo", "estrella", "amor", "bosque", "reloj", "ciudad", "helado"];
let palabra_elegida;
let palabra_oculta = [];
let palabra_gameOver;
let vidas_del_jugador_actual = 5;
let botones_alfabetico = LISTA_BOTONES.children;


// genera un numero aleatorio
function numeroAleatorio(variable) {
    return generarAleatorio = Math.floor(Math.random() * variable.length - 1) + 1;
}


//elecciona una palabra aleatoria
function eleccionDePalabra() {
    palabra_elegida = CONT_PALABRAS[numeroAleatorio(CONT_PALABRAS)].split("");

    for (let i of palabra_elegida) {
        palabra_oculta.push(" _ ")
    };
    mostrarEnPantalla();
}
eleccionDePalabra();



// muetra la letra acertada (si la hay) y quita vida si no se acierta
function mostrarPalabra(letra_ingresada) {
    let indice_palabra_oculta = 0;

    if (vidas_del_jugador_actual <= 0) {
        for (let i of botones_alfabetico) {
            i.disabled = true;
        }
        palabra_gameOver = palabra_elegida.join("");
        return PALABRA_DECIFRABLE.textContent = "!perdiste! palabra: " + palabra_gameOver.toUpperCase();
    };

    if (palabra_elegida.indexOf(letra_ingresada) == -1) {
        vidas_del_jugador_actual--;
        VIDAS_JUGADOR.textContent = "vidas: " + vidas_del_jugador_actual;
    };

    palabra_elegida.forEach(letra => {
        if (letra_ingresada === letra) {
            palabra_oculta[indice_palabra_oculta] = " " + letra_ingresada + " ";
        }
        indice_palabra_oculta++;
    });
    mostrarEnPantalla();
    verificacionpalabraAcertada();
}

// comprueba si la palabra se completo correctamente
function verificacionpalabraAcertada() {
    let palabraActual = palabra_oculta.join("").split(" ").join("");
    const palabraElegida_2 = palabra_elegida.join("");

    if (palabraActual === palabraElegida_2) {
        for (let i of botones_alfabetico) {
            i.disabled = true;
        }
        return PALABRA_DECIFRABLE.textContent = "!ganaste! palabra: " + palabraElegida_2.toUpperCase();
    }
};

//actualiza y muestra en la pantalla
function mostrarEnPantalla() {
    let palabraUnida = palabra_oculta.join("");
    PALABRA_DECIFRABLE.textContent = palabraUnida
}


// reinicia los valores predeterminados y se llama nuevamente a la funcion eleccionDePalabra
function nuevaPalabra() {
    palabra_elegida;
    palabra_oculta = [];
    palabra_gameOver;
    vidas_del_jugador_actual = 5;
    VIDAS_JUGADOR.textContent = "vidas: 5";
    for (let i of botones_alfabetico) {
        i.disabled = false;
    }
    eleccionDePalabra();
}
BOTON_NUEVA_PALABRA.addEventListener("click", nuevaPalabra);