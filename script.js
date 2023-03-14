PERSONAJES = [
    "HOMBRE",
    "MUJER",
    "GATO",
    "PERRO",
    "DINOSAURIO",
    "RANA",
    "ARAÑA",
    "PULPO",
]

ACCIONES = [
    "DIBUJAR",
    "CORRER",
    "GRITAR",
    "DIBUJAR",
    "SALTAR",
    "DORMIR",
    "COMER",
    "CANTAR",
]

LUGARES = [
    "CAMPO",
    "CASA",
    "LUNA",
    "BOSQUE",
    "CIUDAD",
    "NUBES",
    "SALON",
    "BIBLIOTECA",
]


var isRunPersonajes = true
var isRunAcciones = true
var isRunLugares = true

var personajesInterval = null;
var accionesInterval = null;
var lugaresInterval = null;

const getElementInList = (lista, index) => {
    max = lista.length
    if (index < 0) {
        index = max
    } else if (index > max) {
        index = 0
    }
    return lista[index]
}

const runPersonajes = () => {
    let index = 0
    personajesInterval = setInterval(() => {
        index = index + 1
        if (index > PERSONAJES.length) {
            index = 0
        }
        $("#list_1_1").text(getElementInList(PERSONAJES, index - 1 ))
        $("#list_1_2").text(getElementInList(PERSONAJES, index ))
        $("#list_1_3").text(getElementInList(PERSONAJES, index + 1 ))
    }, 500)
}

const runAcciones = () => {
    let index = 0
    accionesInterval = setInterval(() => {
        index = index + 1
        if (index > PERSONAJES.length) {
            index = 0
        }
        $("#list_2_1").text(getElementInList(ACCIONES, index - 1 ))
        $("#list_2_2").text(getElementInList(ACCIONES, index ))
        $("#list_2_3").text(getElementInList(ACCIONES, index + 1 ))
    }, 500)
}

const runLugares = () => {
    let index = 0
    lugaresInterval = setInterval(() => {
        index = index + 1
        if (index > PERSONAJES.length) {
            index = 0
        }
        $("#list_3_1").text(getElementInList(LUGARES, index - 1 ))
        $("#list_3_2").text(getElementInList(LUGARES, index ))
        $("#list__3").text(getElementInList(LUGARES, index + 1 ))
    }, 500)
}

const stopPersonajes = () => {
    console.log('stopPersonajes')
    clearInterval(personajesInterval);
    personajesInterval = null
}

const stopAcciones = () => {
    console.log('stopAcciones')
    clearInterval(accionesInterval);
    accionesInterval = null
}

const stopLugares = () => {
    console.log('stopLugares')
    clearInterval(lugaresInterval);
    lugaresInterval = null

}

const reiniciar = () => {
    if (!personajesInterval && !accionesInterval && !lugaresInterval) {
        Animacion()
    }
}

const Animacion = () => {
    runPersonajes()
    runAcciones()
    runLugares()
}

const Iniciar = () => {
    $("#stop_1").on('click', stopPersonajes);
    $("#stop_2").on('click', stopAcciones);
    $("#stop_3").on('click', stopLugares);
    $("#iniciar").on('click', reiniciar);
    Animacion();
}

$(document).ready( ()=>{
    Iniciar()
}
);