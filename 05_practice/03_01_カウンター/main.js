const oneDown = document.getElementById("one-down")
const double = document.getElementById("double")
const oneUp = document.getElementById("one-up")
const reset = document.getElementById("reset")
const number = document.getElementById("number")
let count = 0

oneUp.onclick = function() {
  count += 1
  number.textContent = count
}

oneDown.onclick = function() {
  count -= 1
  number.textContent = count
}

double.onclick = function() {
  count *= 2
  number.textContent = count
}

reset.onclick = function() {
  count = 0
  number.textContent = count
}
