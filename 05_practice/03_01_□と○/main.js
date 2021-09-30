const figure = document.getElementById("figure")

const repeat = function() {
  figure.onclick = function() {
    figure.classList.add("rounded")
  }
  figure.stopPropagation()
}
repeat()

const repeat2 = function() {
  figure.onclick = function() {
    figure.classList.remove("rounded", "square")
    figure.classList.add("triangle")
  }
}
repeat2()
// const figureTwo = document.getElementById("figure-two")

// figureTwo.onclick = function() {
//   figureTwo.classList.remove("square")
//   figureTwo.classList.add("rounded-two")
// }
// figureTwo.onclick = function() {
//   figureTwo.classList.remove("rounded-two")
//   figureTwo.classList.add("triangle")
// }
// figureTwo.onclick = function() {
//   figureTwo.classList.remove("triangle")
//   figureTwo.classList.add("square")
// }
