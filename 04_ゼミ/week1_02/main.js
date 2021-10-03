const btnOne = document.getElementById("btn1")
const answerOne = document.getElementById("answer1")
const btnTwo = document.getElementById("btn2")
const answerTwo = document.getElementById("answer2")
const btnThree = document.getElementById("btn3")
const answerThree = document.getElementById("answer3")

btnOne.onclick = function() {
  answerOne.textContent = "A.漫画です！！"
}
btnTwo.onclick = function() {
  answerTwo.textContent = "A.マガジン派です！！"
}
btnThree.onclick = function() {
  answerThree.textContent = "A.FAIRY TAILです！！"
}
