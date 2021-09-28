// 要素を取得する
const element = document.getElementById("elementId")
console.log("「要素を取得する」で取得した要素 →", element)

//const element = document.getElementById("elementId")
//console.log("「要素を取得する」で取得した要素 →", element)

// 要素を取得する - 発展：子要素を取得する
const buttons = document.getElementById("buttons")
for (const button of buttons.children) {
  button.onclick = function() {
    alert("clicked: " + button.textContent)
  }
}

//const buttons = document.getElementById("buttons")
//for (const button of buttons.children) {
//button.onclick = function() {
//alert("clicked: " + button.textContent)
//}
//}
console.dir(buttons)
// 要素を変更する - textContent
//const elementTextContent = document.getElementById("element-textContent")
//elementTextContent.textContent = "こんばんは"

const elementTextContent = document.getElementById("element-textContent")
elementTextContent.textContent = "うぃっすうぃっすうぃっすー"
// 要素を変更する - style
const elementStyle = document.getElementById("element-style")
elementStyle.style.fontWeight = "bold"

//const elementStyle = document.getElemnetById("element-style")
//elementStyle.style.fontWeight = "bold"
// 要素を変更する - className
//const elementClassName = document.getElementById("element-className")
//elementClassName.className = "nice-element"

const elementClassName = document.getElementById("element-className")
elementClassName.className = "great-element"
// 要素を変更する - classList
//const elementClassList = document.getElementById("element-classList")
//elementClassList.classList.add("great-element")

const elementClassList = document.getElementById("element-classList")
elementClassList.classList.add("nice-element")
// 要素を追加する - appendChild
//const elementAppendChild = document.getElementById("element-appendChild")
//const div1 = document.createElement("div")
//div1.textContent = "こんばんは"
//elementAppendChild.appendChild(div1)

const elementAppendChild = document.getElementById("element-appendChild")
const div3 = document.createElement("div")
div3.textContent = "ありがとう"
elementAppendChild.appendChild(div3)
// 要素を追加する - 最新の方法
const elementPrepend = document.getElementById("element-prepend")
const div2 = document.createElement("div")
div2.textContent = "おはよう"
elementPrepend.prepend(div2)

// 要素を削除する - remove
const elementRemove = document.getElementById("element-remove")
elementRemove.remove()
