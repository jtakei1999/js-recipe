var tDisp = document.getElementById("t-disp")
var bDisp = document.getElementById("b-disp")

function dis(n) {
  if (tDisp.value == 0) {
    tDisp.value = "" + n.value
  } else {
    tDisp.value = tDisp.value + n.value
  }
}
​
function calc() {
  if (tDisp.value.indexOf("÷") != -1) {
    tDisp.value = tDisp.value.replace("÷", "/")
  }
  if (tDisp.value.indexOf("×") != -1) {
    tDisp.value = tDisp.value.replace("×", "*")
  }
  bDisp.value = new Function("return " + tDisp.value)()
  if (tDisp.value.indexOf("*") != -1) {
    tDisp.value = tDisp.value.replace("*", "×")
  }
  if (tDisp.value.indexOf("/", "÷") != -1) {
    tDisp.value = tDisp.value.replace("/", "÷")
  }
}
​
function del() {
  tDisp.value = tDisp.value.slice(0, -1)
}
​
function ac() {
  tDisp.value = 0
  bDisp.value = 0
}