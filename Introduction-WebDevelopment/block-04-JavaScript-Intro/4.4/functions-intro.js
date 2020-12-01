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

function indexOfGreatestValue(list) {
  let greatest = Number()
  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      greatest = list[i]
    }
    else {
      if (list[i] > greatest) {
        greatest = list[i]
      }
    }
  }
  return list.indexOf(greatest)
}

console.log(indexOfGreatestValue(myArray))

// Exercise 3
myArray = [2, 3, 6, 7, 10, 1]

function indexOfLowestValue(list) {
  let lowest = Number()
  for (let i = 0; i < list.length; i++) {
    if (i === 0) {
      lowest = list[i]
    }
    else {
      if (list[i] < lowest) {
        lowest = list[i]
      }
    }
  }
  return list.indexOf(lowest)
}

console.log(indexOfLowestValue(myArray))
