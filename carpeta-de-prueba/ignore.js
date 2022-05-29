
tareasArray = []

function Tarea(tarea, tipo, importancia, info) {
    this.tarea = tarea
    this.tipo = tipo
    this.importancia = importancia
    this.info = tarea + '. Tipo: ' + tipo + '. Importancia: ' + importancia
}

while(true) {
    const tarea = prompt("Ingrese tarea")
    const tipo = prompt("Ingrese tipo de tarea (laboral, academica, social, etc)")
    const importancia = parseInt(prompt("Ingrese nivel de importancia (1 al 5)"))
    const info = Tarea.info

    const tareaPendiente = new Tarea(tarea, tipo, importancia, info)
    tareasArray.push(tareaPendiente.info)

    if(prompt("¿Quedan tareas pendientes? (presione la tecla n para anular, s para seguir)")=="n") {
        break
    }
}

tareasArray.forEach(Lista)
function Lista() {
    const containerLista = document.createElement('div')
    containerLista.setAttribute("id", "tareaDiv")
    const elementoLista = document.createElement('ul')
    const btnLista = document.createElement("button")
    btnLista.innerHTML = "Borrar tareas"

    let largoLista = tareasArray.length;
    
    document.getElementsByClassName('tareasPendientes')[0].appendChild(containerLista)
    containerLista.appendChild(elementoLista)
    
    for(i = 0; i < largoLista; i++) {
        itemLista = document.createElement('li')
        itemLista.setAttribute("id", "tarea")
        itemLista.innerHTML = tareasArray[i]
        elementoLista.appendChild(itemLista)
        itemLista.append(btnLista)
        btnLista.onclick = ()=> {
        document.removeChild(itemLista)
    }
    }
    
}




const tareaObj = {name: tarea, type: tipo, importance: importancia}
        console.log(tareaObj)
        const tareaJSON = JSON.stringify(tareaObj)
        localStorage.setItem("tareaobj", tareaJSON)



        const nota = {
            id: new Date().getTime(),
            name: text
          }
          notasArray2.push(nota)
          localStorage.setItem("notasArray", JSON.stringify(notasArray2))
          const nota2 = localStorage.getItem("notasArray2")
          ul.textContent = nota2