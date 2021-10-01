const figure = document.getElementById("figure")
const figure2 = document.getElementById("figure2")
const figure3 = document.getElementById("figure3")

figure.onclick = function() {
  if (figure3.classList.contains("change") !== false) {
    figure3.classList.remove("change")
    figure.classList.add("change")
    figure3.style.display = "none"
    figure.style.display = "block"
  } else if (figure.classList.contains("change") !== false) {
    figure.classList.remove("change")
    figure2.classList.add("change")
    figure.style.display = "none"
    figure2.style.display = "block"
  } else if (figure2.classList.contains("change") !== false) {
    figure2.classList.remove("change")
    figure3.classList.add("change")
    figure2.style.display = "none"
    figure3.style.display = "block"
  }
}
