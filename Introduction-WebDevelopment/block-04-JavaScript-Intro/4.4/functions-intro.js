// Exercise 1
function isPalindome (str) {
  str = String(str)
  let reverseWord = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reverseWord += str[i]
  }
  if (str === reverseWord) {
    return true
  }
  else {
    return false
  }
}

console.log(isPalindome('12321'))

// Exercise 2
myArray = [2, 3, 6, 7, 10, 1]
function indexOfBiggestValue(list) {
  let biggest = Number()
  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      biggest = list[i]
    }
    else {
      if (list[i] > biggest) {
        biggest = list[i]
      }
    }
  }
  return list.indexOf(biggest)
}

console.log(indexOfBiggestValue(myArray))
