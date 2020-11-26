let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let oddSum = Number()

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 1) {
    oddSum ++
  }
}

if (oddSum === 0) {
  console.log('No odd numbers was found')
}
else {
  console.log(`I found ${oddSum} odd numbers`)
}
