//menu lateral
// adicionar classe no item da lista selecionado
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered"); //adiciona a class no clck atual
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
