// const imageElement = document.getElementById("dog-image")

// // 指定したサーバーにデータを取りに行く
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((res) => {
//     return res.json() // 結果を json として読み込む
//   })
//   .then((data) => {
//     imageElement.src = data.message // 画像を表示する
//   })
const imageElement = document.getElementById("dog-image")
const loadButton = document.getElementById("load-button")

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    imageElement.src = data.message
  })

loadButton.onclick = function() {
  location.reload()

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      imageElement.src = data.message
    })

  // fetch("https://dog.ceo/api/breeds/image/random")
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     imageElement.src = data.message
  //   })
}
