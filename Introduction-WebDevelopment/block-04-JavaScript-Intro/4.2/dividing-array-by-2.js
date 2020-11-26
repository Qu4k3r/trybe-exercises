let myArray = Array()

for (let i = 1; i < 26; i++) {
  myArray.push(i)
}

console.log(myArray)

let myNewArray = Array()

for (j of myArray) {
  myNewArray.push(j / 2)
}

console.log(myNewArray)
