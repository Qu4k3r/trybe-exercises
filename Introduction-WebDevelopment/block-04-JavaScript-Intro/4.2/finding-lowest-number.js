let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let lowerNumber = Number()

for (let i=0; i < numbers.length; i++) {
  if (i >= 1) {
    if (numbers[i] < lowerNumber) {
      lowerNumber = numbers[i]
    }
  }
  else {
    lowerNumber = numbers[0]
  }
}

console.log(lowerNumber)
