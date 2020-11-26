let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let position

for (let i = 1; i < numbers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      position = numbers[j]
      numbers[j] = numbers[i]
      numbers[i] = position
    }
  }
}

console.log(numbers)
