let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let sum = Number()

for (let i = 0; i <= numbers.length - 1; i++) {
  sum += numbers[i]
}

let average = sum / numbers.length

if (average > 20) {
  console.log('average greater than 20')
}

else {
  console.log('average less than 20')
}
