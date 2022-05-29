
//notas
notasArray = []

function Record(texto, important) {
    this.texto = texto
    this.important = important
    this.info = texto + '. Importancia: ' + important
}

const btnNotas = document.getElementById("notas-btn")
btnNotas.onclick = () => {
    while (true) {
        const texto = prompt("Ingresar recordatorio:")
        const important = parseInt(prompt("importancia (del 1 al 5)"))
        const info = Record.info
    
    
        const recordatorio = new Record(texto, important, info)
        notasArray.push(recordatorio.info)
      
    
        if(prompt("agregar mas recordatorios?") == "no") {
            break
        }
    
    }
    Lista()
}

function Lista() {
    const containerLista = document.createElement('div')
    const elementoLista = document.createElement('ul')
    let largoLista = notasArray.length,
    itemLista,
    i;

    document.getElementsByClassName('notas')[0].appendChild(containerLista)
    containerLista.appendChild(elementoLista)

    for(i = 0; i < largoLista; i++) {
        itemLista = document.createElement('li')
        itemLista.innerHTML = notasArray[i]
        elementoLista.appendChild(itemLista)
    }
}

console.log(notasArray)






