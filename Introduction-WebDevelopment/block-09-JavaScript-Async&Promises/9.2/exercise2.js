const promiseFacility = new Promise((resolve, reject) => {
  const randomNumbers = [];
  let count = 0;
  while (count < 10) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
    count ++;
  }
  const sumOfSquares = randomNumbers.map(num => num ** 2).reduce((a, b) => a + b);
  // return sumOfSquares < 8000 ? resolve() : reject();
  sumOfSquares < 8000 ? resolve(sumOfSquares) : reject('É mais de 8000! Essa promise deve estar errada!');
  // pergunta: preciso desse retorno ou nao?
})

const newArrayInCaseOfSuccess = sum => [2,3,5,10].map(num => Math.round(sum / num));

const execute = async () => {
  try {
    const sum = await promiseFacility;
    const newArray = newArrayInCaseOfSuccess(sum);
    console.log(newArray);
  }
  catch (e){
    console.log(e)
  }
};

execute();
