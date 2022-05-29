const input = document.querySelector("input");
const addBtn = document.querySelector("#notas-btn");
const ul = document.querySelector(".notas-ul");

let notasArray2 = []
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;
    
    const nota = {
      notas: text
    }
    notasArray2.push(nota)
    localStorage.setItem("notasobj", JSON.stringify(notasArray2))


    


    li.appendChild(p);
    li.appendChild(addDeleteBtnNotas());
    ul.appendChild(li);

    input.value = "";
    
  }
  
});
function addDeleteBtnNotas() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

  });

  return deleteBtn;
}

const anteriores = JSON.parse(localStorage.getItem("notasobj")) 
console.log(anteriores)
//const anterioresJSON = JSON.parse(anteriores)


const note = JSON.stringify(anteriores)

ul.textContent = note
//let anterioresNotas = Object.values(anteriores)
//console.log(anterioresNotas)
