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
const main = document.getElementById("main")

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

  container.append(card)
  card.append(todo)
  card.append(deleteButton)

  deleteButton.onclick = function() {
    card.remove()
  }
  return card
}

//ココから発展
const addCategory = document.getElementById("add-category")

//const copyGen = document.getElementById("copy-gen")

// const copySaki = copyGen.cloneNode(true)

// const newCreateCard = function() {
//   main.append(copySaki)

//   addButton.onclick = function() {
//     const card = createCard(inputElement.value)
//     container.append(card)

//     inputElement.value = ""
//   }
//   //Enterキーで追加可能処理
//   inputElement.onkeydown = function(event) {
//     if (event.key === "Enter") {
//       const card = createCard(inputElement.value)
//       container.append(card)

//       inputElement.value = ""
//     }
//   }
//   const createCard = function(text) {
//     const card = document.createElement("div")
//     card.className = "card"

//     const todo = document.createElement("div")
//     todo.className = "todo"
//     todo.textContent = text
//     card.append(todo)

//     const deleteButton = document.createElement("div")
//     deleteButton.className = "delete"

//     container.append(card)
//     card.append(todo)
//     card.append(deleteButton)

//     deleteButton.onclick = function() {
//       card.remove()
//     }
//     return card
//   }
// }
let number = 1

const newCreateCard = function() {
  const listContainer = document.createElement("div")
  listContainer.className = "list-container"
  listContainer.id = "copy-gen"
  main.append(listContainer)

  const header = document.createElement("div")
  header.className = "list-header"
  header.id = "list-header"
  header.textContent = number += 1
  listContainer.append(header)

  const cardsContainer = document.createElement("div")
  cardsContainer.className = "cards-container"
  cardsContainer.id = "cards-container"
  header.after(cardsContainer)

  const listFooter = document.createElement("div")
  listFooter.className = "list-footer"
  listFooter.id = "list-footer"
  cardsContainer.after(listFooter)

  const inputContainer = document.createElement("div")
  inputContainer.className = "input-container"
  inputContainer.id = "input-container"
  listFooter.append(inputContainer)

  const inputTodo = document.createElement("input")
  inputTodo.className = "input-todo"
  inputTodo.id = "input-todo"
  inputContainer.append(inputTodo)

  const inputButton = document.createElement("div")
  inputButton.className = "input-button"
  inputButton.id = "add-button"
  inputButton.textContent = "追加"
  inputTodo.after(inputButton)

  const category = document.createElement("div")
  category.className = "category"
  category.id = "category"
  listFooter.after(category)

  const addCategory = document.createElement("div")
  addCategory.className = "add-category"
  addCategory.id = "add-category"
  addCategory.textContent = "＋カードを追加"
  category.append(addCategory)

  inputButton.onclick = function() {
    const card = createCard(inputTodo.value)
    cardsContainer.append(card)

    inputTodo.value = ""
  }
  //Enterキーで追加可能処理
  inputTodo.onkeydown = function(event) {
    if (event.key === "Enter") {
      const card = createCard(inputTodo.value)
      cardsContainer.append(card)

      inputTodo.value = ""
    }
  }

  const createCard = function(text) {
    const card = document.createElement("div")
    card.className = "card"

    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text

    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"

    cardsContainer.append(card)
    card.append(todo)
    card.append(deleteButton)

    deleteButton.onclick = function() {
      card.remove()
    }
    return card
  }

  addCategory.onclick = function() {
    newCreateCard()
  }
}

addCategory.onclick = function() {
  newCreateCard()
}
