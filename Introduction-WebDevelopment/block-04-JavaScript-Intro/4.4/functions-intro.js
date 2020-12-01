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

// Exercise 4
myArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function greatestArrayElement(list) {
  let greatestLengthElement = String()
  for (let element of list) {
    if (element.length > greatestLengthElement.length) {
      greatestLengthElement = element
    }
  }
  return greatestLengthElement
}

console.log(greatestArrayElement(myArray))

// Exercise 5
myArray = [2, 3, 2, 5, 8, 2, 3]

function countingRepeatedElements(list) {
  let numberOfRepetitions = []
  let count = 0
  for (let i = 0; i < list.length; i++) {
    for (let j of list) {
      if (j === list[i]) {
        count += 1
      }
    }
    numberOfRepetitions.push(count)
    count = 0
  }
  let greatestElement = String()

  // I called the function of Exercise 2 in order to spare time (please forgive me)
  greatestElement = myArray[indexOfGreatestValue(numberOfRepetitions)]

  return greatestElement
}

console.log(countingRepeatedElements(myArray))

// Exercise 6
function somatory (number) {
  number = Number(number)
  sum = 0
  for (let i = 0; i <= number; i++) {
    sum += i
  }
  return sum
}

console.log(somatory(5))

// Exercise 7
function verifiesWordsEnd(word, ending) {
  word = String(word)
  ending = String(ending)
  let isEndingTrue = false
  let wordIndex = 1
  for (let lastLetter = ending.length - 1; lastLetter >= 0; lastLetter--) {
    if (ending[lastLetter] !== word[word.length - wordIndex]) {
      return isEndingTrue
    }
    else {
      wordIndex++
    }
  }
  isEndingTrue = true
  return isEndingTrue
}

console.log(verifiesWordsEnd('joaofernando', 'fernano'))
