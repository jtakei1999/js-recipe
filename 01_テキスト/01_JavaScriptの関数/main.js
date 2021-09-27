// 練習問題 １
const plus1 = function(x) {
  return x + 1
}
console.log(plus1(3))
// 関数名: plus1
// 引数: x
// 返り値: x + 1

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...

const num = function(x) {
  return 3 * x + 1
}
console.log(num(2))
// f2: 1, 10, 100, 1000, 10000, ...
const num2 = function(x) {
  return 10 ** x
}
console.log(num2(3))
// f3: 2, 14, 107, 1010, 10013, ...
const num3 = function(x) {
  return num(x) + num2(x)
}
console.log(num3(3))

// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply
const multiply = function(x, y) {
  return x * y
}
console.log(multiply(6, 7))
// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound
const plusRound = function(x, y) {
  return Math.round(x + y)
}
console.log(plusRound(2.3, 3.8))

const sayHelloTo = function(name) {
  alert("Hey " + name + "! " + "We have a gift for you.")
}
sayHelloTo("guys")

const aletrTime = function() {
  alert(new Date().toLocaleString())
}
aletrTime()

let count = 0

const countUp = function() {
  count += 1
}
countUp()
console.log(count)

countUp()
countUp()
console.log(count)
