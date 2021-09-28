// n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
// n を 3 で割ったあまりが 0
const number = 24

for (let i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log(i + "!!!!")
  } else {
    console.log(i)
  }
}

const fineNumber = function(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      console.log(i + "!!!!")
    } else {
      console.log(i)
    }
  }
}
fineNumber(30)
