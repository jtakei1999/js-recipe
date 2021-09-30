const figure = document.getElementById("figure")

figure.onclick = function() {
  if (figure.classList.contains("triangle", "rounded") === true) {
    figure.classList.remove("triangle", "rounded")
    figure.classList.add("square")
  } else if (figure.classList.contains("rounded") === true) {
    figure.classList.remove("rounded", "square")
    figure.classList.add("triangle")
  } else {
    figure.classList.add("rounded")
  }
}
