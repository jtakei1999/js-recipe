const input = document.getElementById("input")
const word = document.getElementById("word")
const addButton = document.getElementById("add-button")
const deleteButton = document.getElementById("delete-button")

// 状態を表現する変数
let list = []

if (localStorage.list) {
  // 状態の更新 list: [] -> ["こんにちは"]
  list = JSON.parse(localStorage.list)

  // 状態の変化を画面に表示する
  for (const text of list) {
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    word.append(card)
  }
}

addButton.onclick = function() {
  const text = input.value

  // 状態の更新 list: ["こんにちは"] -> ["こんにちは", "こんばんは"]
  list.push(text)
  localStorage.list = JSON.stringify(list)

  // 状態の変化を画面に表示する
  const card = document.createElement("div")
  card.className = "card"
  card.textContent = text
  word.append(card)

  input.value = ""
}

deleteButton.onclick = function() {
  // 状態の更新
  list = []
  localStorage.list = JSON.stringify(list)

  // 状態の表示
  word.textContent = ""
}

// ページを表示するとき（保存されたリストがあれば）
list = JSON.parse(localStorage.list)

// カードを追加するとき
list.push(text)
