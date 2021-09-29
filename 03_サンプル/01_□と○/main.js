/*const figure = document.getElementById("figure")

figure.onclick = function() {
  figure.classList.toggle("rounded")
}*/

/*const figure = document.getElementById("figure")

figure.onclick = function() {
  figure.classList.toggle("rounded")
}
*/

const figure = document.getElementById("figure")
const circleButton = document.getElementById("circle-button")
const squareButton = document.getElementById("square-button")

circleButton.onclick = function() {
  figure.classList.add("rounded")
}
squareButton.onclick = function() {
  figure.classList.remove("rounded")
}
