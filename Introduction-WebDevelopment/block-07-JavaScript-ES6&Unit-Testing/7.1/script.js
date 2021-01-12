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

testingScope(false);

//Exercise 2 part 1
const factorial = (num) => {
  for (let previousNumbers = num - 1; previousNumbers > 0; previousNumbers -= 1) {
    num *= previousNumbers
  }
  return num
}

console.log(factorial(6))

//Recursive way (BEAUTIFUL)
const factorialNumber = (num) => {
  if (num <= 1) {
    return 1
  }
  else {
    return num * factorialNumber(num - 1)
  }
}

console.log(factorialNumber(3))
