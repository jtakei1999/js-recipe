const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function() {
  //
  count += 1
  //
  display.textContent = count
}
