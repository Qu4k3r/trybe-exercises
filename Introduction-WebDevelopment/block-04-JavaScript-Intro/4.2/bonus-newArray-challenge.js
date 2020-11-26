let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let myNewArray = Array()

/* Here the goal is to multiply every array element with its successor and so on
Note that the loop adds instantly the operation's result in myNewArray
A quick obervation: the task suggested we multiply the last element by 2 (since, you know, there's no element after THE LAST element)
*/

for (let j = 0; j < numbers.length; j++) {
  if (j === 9) {
    myNewArray.push(numbers[j] * 2)
  }
  else {
    myNewArray.push(numbers[j] * numbers[j + 1])
  }
}  

console.log(myNewArray)
