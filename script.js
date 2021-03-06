
const shoppingList = document.getElementById("list");
const input = document.getElementById("input");
const niveis = document.getElementById("niveis");
const addButton = document.getElementById("add");
const resetButton = document.getElementById("reset");
const searchButton = document.getElementById("search");

let list = [];


function reloadList() {
    shoppingList.innerHTML = ""; // Limpa nosso Elemento HTML
    for (let index = 0; index < list.length; index++) {
      let currentElement = list[index];
      currentElement.id = index;
      shoppingList.appendChild(currentElement);
    }
}

function createRemoveButton() {
    const removeButton = document.createElement("button"); // Criamos um botão
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", (e) => { // Adicionamos um evento nele.
      list = list.filter((_, index) => index !== Number(e.path[1].id));
      reloadList(); // Chamamos a função para recarregar a lista.
    });
    return removeButton;
}

function onClickFunction() {
    let newItem         = document.createElement("li");   //Criando um elemento html "li"
    let paragraph       = document.createElement("p");  //Criando um elemento html "p"
    let nivel           = document.createElement("p");
    let removeButton    = createRemoveButton();

    paragraph.classList.add("tarefa");
            
    if (input.value) {
    paragraph.innerText = input.value; // Adicionamos o valor do input em nosso "p"
    nivel.innerText     = niveis.value;
  
    newItem.appendChild(paragraph); // Colocamos nosso paragraph dentro de nossa li
    newItem.appendChild(nivel);
    newItem.appendChild(removeButton);// Colocamos nosso button dentro de nossa li

    input.value = ""; // Limpamos nosso input
    list.push(newItem);
  
    reloadList();
    }
  }
  addButton.addEventListener("click", onClickFunction);


  function onClickResetFunction() {
    shoppingList.innerHTML = "";
    list = [];
  }
  resetButton.addEventListener("click", onClickResetFunction);

  function onClickSearc(){
    if (input.value) {
        shoppingList.innerHTML = "";
        for (let index = 0; index < list.length; index++) {
            let tarefa = list[index].getElementsByClassName("tarefa")
            if(input.value===tarefa[0].innerText){
                let currentElement = list[index];
                currentElement.id = index;
                shoppingList.appendChild(currentElement);
            }
          }
    }else{
        console.log("list reload")
        reloadList();
    }
  }

  searchButton.addEventListener("click", onClickSearc);