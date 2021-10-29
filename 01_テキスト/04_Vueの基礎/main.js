// javascriptの場合
// const input = document.getElementById("input")
// const button = document.getElementById("button")
// let count = 0

// button.onclick = function() {
//   count += 1
//   input.textContent = count
// }

//Vueの場合
new Vue({
  el: "#app",
  data: {
    count: 0,
  },
  methods: {
    button: function() {
      this.count += 1
    },
  },
})
