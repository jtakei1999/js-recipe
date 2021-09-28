/*const button = document.getElementById("button")

const alertMessage = function() {
  alert("クリックしたね！")
}
button.onclick = alertMessage
*/
/*const button = document.getElementById("button")

button.onclick = function() {
  alert("クリックしたね！")
}
*/
const button = document.getElementById("button")

const alertMessage = function() {
  alert("クリックしたね！")
}
button.onclick = alertMessage

/*const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue
*/

//練習問題２
function keyDown(e) {
  console.log(e.key)
}

const textarea = document.getElementById("input-text")
textarea.onkeydown = keyDown
