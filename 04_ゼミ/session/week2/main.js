const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function() {
  const card = createCard(memoInput.value)
  memoContainer.append(card)

  memoInput.value = ""
}
//Enterキーで処理可能
memoInput.onkeydown = function(event) {
  if (event.key === "Enter") {
    const card = createCard(memoInput.value)
    memoContainer.append(card)

    memoInput.value = ""
  }
}

const createCard = function(text) {
  const containerBox = document.createElement("div")
  containerBox.className = "container-box"

  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  const deleteButton = document.createElement("div")
  deleteButton.textContent = "削除"
  deleteButton.className = "delete"

  memoContainer.append(containerBox)
  containerBox.append(card)
  containerBox.append(todo)
  containerBox.append(deleteButton)

  deleteButton.onclick = function() {
    containerBox.remove()
  }
  return card
}
