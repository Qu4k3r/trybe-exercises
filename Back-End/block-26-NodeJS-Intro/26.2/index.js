const myPromise = (a, b, c) => {
  const codePromise =  new Promise((res, rej) => {
    if (typeof (a + b + c) !== 'number') rej(new Error("Infome apenas numeros"));
    const result = c * (a + b);
    if (result <= 50) rej(new Error("Valor muito baixo"));
    res(result);
  });

  return codePromise;
};

const playingWithNumbers = async (a, b, c) => {
  try {
    const result = await myPromise(a, b, c);
    console.log(result);
    return result;
  } catch(e) {
    console.log(e.message);
  }
}

const randomNumber = Math.floor(Math.random() * 10 + 1);

playingWithNumbers(randomNumber, randomNumber, randomNumber);
