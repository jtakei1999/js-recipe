// const inputElement = document.getElementById("input-todo")
// const container = document.getElementById("cards-container")
// const addButton = document.getElementById("add-button")

// // 追加ボタンを押したときの処理を登録
// addButton.onclick = function() {
//   // カードを作成する
//   const card = createCard(inputElement.value)
//   container.append(card)

//   // 入力欄を空にする
//   inputElement.value = ""
// }

// // 共通の処理：テキストからカードを作成する
// const createCard = function(text) {
//   // カードの枠を作る
//   const card = document.createElement("div")
//   card.className = "card"

//   // テキストを表示する部分を作る
//   const todo = document.createElement("div")
//   todo.className = "todo"
//   todo.textContent = text
//   card.append(todo)

//   // 削除ボタンを作る
//   const deleteButton = document.createElement("div")
//   deleteButton.className = "delete"

//   // 削除ボタンを押したときの処理を登録
//   deleteButton.onclick = function() {
//     // カードを削除する
//     card.remove()
//   }
//   card.append(deleteButton)

//   return card
// }

const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function() {
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}
//Enterキーで追加可能処理
inputElement.onkeydown = function(event) {
  if (event.key === "Enter") {
    const card = createCard(inputElement.value)
    container.append(card)

    inputElement.value = ""
  }
}

const createCard = function(text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function() {
    card.remove()
  }
  card.append(deleteButton)
  return card
}

//ココから発展
const addCategory = document.getElementById("add-category")

const createNewCard = function() {
  const copyGen = document.getElementById("copy-gen")
  const listHeader = document.getElementById("list-header")
  const cardsContainer = document.getElementsByClassName("cards-container")
  const listFooter = document.getElementById("list-footer")
  const inputContainer = document.getElementById("input-container")
  const inputTodo2 = document.getElementsByClassName("input-todo")
  const inputButton = document.getElementsByClassName("input-button")
  const category = document.getElementById("category")
  const addCategory = document.getElementById("add-category")

  const newCard = copyGen.cloneNode(true)
  copyGen.after(newCard)

  copyGen.setAttribute("class", "list-container")
  listHeader.setAttribute("class", "list-header")
  cardsContainer.setAttribute("id", "cards-container")
  cardsContainer.setAttribute("class", "cards-container")
  listFooter.setAttribute("class", "list-footer")
  inputContainer.setAttribute("class", "input-container")
  inputTodo2.setAttribute("id", "input-todo")
  inputButton.setAttribute("id", "add-button")
  addCategory.setAttribute("class", "add-category")
  category.setAttribute("class", "category")
  addCategory.setAttribute("class", "add-category")

  addButton.onclick = function() {
    const card = createCard(inputElement.value)
    container.append(card)

    inputElement.value = ""
  }
  //Enterキーで追加可能処理
  inputElement.onkeydown = function(event) {
    if (event.key === "Enter") {
      const card = createCard(inputElement.value)
      container.append(card)

      inputElement.value = ""
    }
  }

  const createCard = function(text) {
    const card = document.createElement("div")
    card.className = "card"

    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    card.append(todo)

    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    deleteButton.onclick = function() {
      card.remove()
    }
    card.append(deleteButton)
    return card
  }
}

addCategory.onclick = function() {
  createNewCard()
}
