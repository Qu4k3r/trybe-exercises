let numbers = [27, 5, 3, 19, 150, 8, 9, 2, 100, 35]
let greaterNumber = Number()

for (let i=0; i < numbers.length; i++) {
  if (i >= 1) {
    if (numbers[i] > greaterNumber) {
      greaterNumber = numbers[i]
    }
    else {
      greaterNumber = greaterNumber
    }
  }
  else {
    greaterNumber = numbers[0]
  }
}

console.log(greaterNumber)
