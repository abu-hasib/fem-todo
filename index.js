// console.log("working...");

const el = document.querySelector("#list");

console.log(el);

const onCreateTodo = function (e) {
  e.preventDefault();
  let { value } = e.target[0];
  let newTodo = document.createElement("li");
  let img = document.createElement("img");
  let todo = document.createElement("p");
  let input = document.createElement("input");
  input.type = "checkbox";
  input.id = "ok";
  todo.textContent = value;
  img.src = "/images/icon-cross.svg";
  newTodo.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "py-4",
    "px-6"
  );
  newTodo.appendChild(input);
  newTodo.appendChild(todo);
  newTodo.appendChild(img);
  el.append(newTodo);
  e.target[0].value = "";
};
