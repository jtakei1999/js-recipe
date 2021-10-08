const imageElement = document.getElementById("cat-image")

fetch("https://api.thecatapi.com/v1/images/search?breed_ids= {breed-id}")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    imageElement.src = data.message
  })
