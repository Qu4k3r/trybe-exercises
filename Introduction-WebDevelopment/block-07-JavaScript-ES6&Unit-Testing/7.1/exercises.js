// Exercise 1
function testingScope(escopo) { 
  if (escopo === true) { 
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

// testingScope(false);

//Exercise 2 part 1
const factorial = num => {
  for (let previousNumbers = num - 1; previousNumbers > 0; previousNumbers -= 1) {
    num *= previousNumbers
  }
  return num
}

// console.log(factorial(6))

//Recursive way (BEAUTIFUL)
const factorialNumber = num => {
  if (num <= 1) {
    return 1
  }
  else {
    return num * factorialNumber(num - 1)
  }
}

// console.log(factorialNumber(3))

//Exercise 2 part 3
const splitPhrase = phrase => phrase.split(' ')

const getGreatestWord = (phrase) => {
  let greater = '';
  splitPhrase(phrase).forEach(word => {
    if(word.length >= greater.length) {
      greater = word
    }
  })
  return greater
}

// console.log(getGreatestWord('oh mama mia mama mia ... mama mia letmego'))

// Exercise 2 part 4
const changeStringX = (newString, stringPhrase) => {
  stringPhrase = stringPhrase.split(' ')
  const findX = stringPhrase.find(element => element === 'x')
  stringPhrase.splice(stringPhrase.indexOf(findX), 1, newString)
  return stringPhrase.join(' ')
}

// Just to remember: the find() method returns only the first true case
console.log(changeStringX('fim', 'partiu x de projeto'))
