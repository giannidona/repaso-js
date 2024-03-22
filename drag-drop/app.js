const input = document.getElementById("todo-input");
const btn = document.getElementById("btn-add");
const container = document.getElementById("container");

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
  const ul = document.createElement("ul");
  ul.className = "list-group";
  list.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
            <p
                id=${index}
                class="card bg-white rounded w-full text-black px-5 py-1 my-2 text-wrap hover:cursor-move z-20 font-bold"
                draggable="true">
                ${todo}
            </p>
        `;
    ul.appendChild(li);
  });
  container.appendChild(ul);

  dragAndDrop();
}

function dragAndDrop() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      // se guarda el elemento padre para saber cual tarjeta esta en movimiento
      dragged = event.target.parentElement;
    });

    card.addEventListener("dragover", (event) => {
      // se previene el comportamiento default para que se pueda dropear la card
      event.preventDefault();
    });

    card.addEventListener("drop", (event) => {
      // nos fijamos si target es diferente a las tarjetas que estan en la lista
      // depende el index se define si la card que esta en movimiento queda por arriba o por debajo
      event.preventDefault();
      const target = event.target.parentElement;

      if (dragged && dragged !== target) {
        const parent = dragged.parentElement;
        const draggedIndex = Array.from(parent.children).indexOf(dragged);
        const targetIndex = Array.from(parent.children).indexOf(target);

        if (draggedIndex < targetIndex) {
          parent.insertBefore(dragged, target.nextSibling);
        } else {
          parent.insertBefore(dragged, target);
        }
      }
    });
  });
}
