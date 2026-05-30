let todo = document.querySelector("#todo");
let botoncito = document.querySelector("#btn");

botoncito.addEventListener("change", function () {
  todo.classList.toggle("dark");
});