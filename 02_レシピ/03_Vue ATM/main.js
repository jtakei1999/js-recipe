new Vue({
  el: "#ATM",
  data: {
    nyuryokugaku: "",
    zandaka: 0,
    object: {
      日付: new Date(),
      操作: "",
      金額: "",
    },
  },
  computed: {
    isDisabled: function() {
      return this.zandaka < this.nyuryokugaku
    },
  },
  methods: {
    nyukin: function() {
      this.object.操作 = "預け入れ"
      this.object.金額 = this.nyuryokugaku
      this.zandaka += Number(this.nyuryokugaku)
      this.nyuryokugaku = ""
    },
    syukkin: function() {
      this.object.操作 = "引き出し"
      this.object.金額 = this.nyuryokugaku
      this.zandaka -= Number(this.nyuryokugaku)
      this.nyuryokugaku = ""
    },
  },
})
