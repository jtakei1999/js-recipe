var a = new Vue({
  el: "#v-mode1",
  data: {
    inputValue: " ",
  },
})

var b = new Vue({
  el: "#app",
  data: {
    zandaka: 0,
    time: " ",
    investigation: " ",
  },
  methods: {
    nyuukin: function() {
      this.zandaka += Number(a.inputValue)
      this.time = new Date()
      this.investigation = "入金"
    },
    syukkin: function() {
      this.zandaka -= Number(a.inputValue)
      this.time = new Date()
      this.investigation = "出金"
    },
  },
})

new Vue({
  el: "#v-for",
  data: {
    items: [a.inputValue, b.time, b.investigation],
  },
})
