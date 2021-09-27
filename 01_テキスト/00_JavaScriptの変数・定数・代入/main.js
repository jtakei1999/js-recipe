// * let キーワードを使って、hensu という名前の変数を宣言する
let hensu

// 変数には値を代入（割り当て）できる
hensu = 42
console.log(hensu)
// 変数には値を再代入できる
hensu = hensu + 1000
console.log(hensu)
// * 多くの場合、変数には宣言と同時に値を代入する
let hensu2 = 42
console.log(hensu2)
// * const キーワードを使うと、定数になる
const teisu = 42
console.log(hensu2)
// 定数には値を再代入できない
const teisu2 = teisu + 100 // エラー
console.log(teisu2)
// * 変数や定数の名前はだいたい自由に決められるが、-（ハイフン）が使えなかったり、最初の文字に数字が使えなかったりする
let namae
// let my-name // だめ
// let 1banme // だめ
namae = "あいうえお"
console.log(namae)
// 複数の単語を組み合わせるときは、ふたつめ以降の単語の最初の文字を大文字にしてくっつけることが多い
// このような書き方をキャメルケースという（大文字がキャメル＝ラクダのこぶにみえることから）
let camelCase // camel + case
camelCase = "アモアス"
console.log(camelCase)

let x = 5
x += 2
x *= 5
x = 100 % x
x /= 6
console.log(x)

let happiness
let sleepiness
const isHappy = happiness > 90
const isSleepy = sleepiness > 90
const isNotHappyAndSleepy = !isHappy && isSleepy
console.log(isNotHappyAndSleepy)
