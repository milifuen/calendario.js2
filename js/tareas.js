

tareasArray = []

function Tarea(tarea, tipo, importancia, info) {
    this.tarea = tarea
    this.tipo = tipo
    this.importancia = importancia
    this.info = tarea + '. Tipo: ' + tipo + '. Importancia: ' + importancia
}

const elementoLista = document.querySelector(".ul")

function Lista() {
    
    const containerLista = document.querySelector(".li-container")
    
    let largoLista = tareasArray.length;
    
    document.getElementsByClassName('tareasPendientes')[0].appendChild(containerLista)
    containerLista.appendChild(elementoLista)
    
    for(i = 0; i < largoLista; i++) {
        itemLista = document.createElement('li')
    itemLista.setAttribute("id", "tarea")
    itemLista.innerHTML = tareasArray[i]
    elementoLista.appendChild(itemLista)
    itemLista.appendChild(addDeleteBtn())[i]

    
    }
    
    tareasArray=[]
}






function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
  
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
  
    deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      elementoLista.removeChild(item);
  
      const items = document.querySelectorAll("li");
  
    });
  
    return deleteBtn;
  }

  const tpBtn = document.getElementById("tp-btn")
  tpBtn.onclick = () => {
      while(true) {
        const tarea = prompt("Ingrese tarea");
        const tipo = prompt("Ingrese tipo de tarea (laboral, academica, social, etc)");
        const importancia = parseInt(prompt("Ingrese nivel de importancia (1 al 5)"));
        const info = Tarea.info;

          
          const tareaPendiente = new Tarea(tarea, tipo, importancia, info);
          tareasArray.push(tareaPendiente.info);
          
          

          
            
            
          if(prompt("¿Quedan tareas pendientes? (presione la tecla n para anular, s para seguir)")=="n") {
              break
          }
          
      }
  
      Lista()
      
  }
  
 
  