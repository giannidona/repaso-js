const input = document.getElementById("todo-input");
const btn = document.getElementById("btn-add");
const container = document.getElementById("container");
const card = document.getElementById("card");

const list = [];
let dragged;

btn.addEventListener("click", (value) => {
  value.preventDefault();
  const todo = input.value;
  list.push(todo);
  input.value = "";
  renderList();
});

function renderList() {
  container.innerHTML = "";
  list.map((todo, index) => {
    let card = document.createElement("div");
    card.innerHTML = `
    <div
    id=${index}
    class="card bg-white rounded w-full text-black px-5 py-1 text-wrap hover:cursor-move z-20"
    draggable="true">
        <p class="font-semibold">${todo}</p>
    </div>
  
    <div class="dropzone my-2 rounded w-full h-10 text-black text-wrap hover:cursor-move z-10" droppable="true"></div>
    `;

    container.appendChild(card);
  });

  dragAndDrop();
}

function dragAndDrop() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      dragged = event.target;
    });
  });

  const dropzones = document.querySelectorAll(".dropzone");
  dropzones.forEach((dropzone) => {
    dropzone.addEventListener("dragover", (event) => {
      event.preventDefault();
    });

    dropzone.addEventListener("drop", (event) => {
      event.preventDefault();
      if (dragged) {
        event.target.appendChild(dragged);
        dragged = null;
      }
    });
  });
}
