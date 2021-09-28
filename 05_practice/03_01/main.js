//発展問題☆
const number = 100

for (let i = 1; i <= number; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else {
    console.log(i)
  }
}

//発展問題☆☆
const threeLove = function(line) {
  for (let i = 1; i <= line; i++) {
    if (i % 3 === 0 || i % 10 === 3 || (30 < i && i < 39)) {
      console.log(i + "!!!!")
    } else {
      console.log(i)
    }
  }
}
threeLove(100)

//発展問題☆☆☆
let count = 1
let limit

const threeFine = function() {
  if (count % 3 === 0) {
    console.log(count + "!!!!!")
  } else {
    console.log(count)
  }
  if (count > 19) {
    clearInterval(limit)
  }
  count++
}
limit = setInterval(threeFine, 1000)
