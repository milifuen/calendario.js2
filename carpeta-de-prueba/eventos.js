//calendario
const mesesArray = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
const salida = "salir"


let agenda = prompt("Indique el mes del evento, escriba salir para salir")

if (mesesArray.includes(agenda)) {
    let fecha = prompt("¿qué día");
    let evento = prompt("¿qué evento?");
    console.log("el", fecha, "de", agenda, "usted tiene:", evento);
} else if (agenda == salida) {
    console.log("No hay nuevas tareas pendientes")
} else {
    console.log("ingresó un mes incorrecto")
}

