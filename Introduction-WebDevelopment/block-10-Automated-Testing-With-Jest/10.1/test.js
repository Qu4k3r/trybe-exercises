const { TestScheduler } = require("jest");

const multiplyTwoNumbers = (a, b) => {
  if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os parametros devem ser um numero')
  }
  return a * b;
}

// it('Throw an Error if one of the parameters is not a number', () => {
//   expect(() => multiplyTwoNumbers('1', 3).toThrowError(/Os parametros devem ser um numero/));
// })

function expectate() {
  expect(multiplyTwoNumbers(2, 3)).toBe(6);
}

// it('multiplies two numbers', () => {
//   expect(multiplyTwoNumbers(2, 3)).toEqual(6);
// });

// OR
it('multiplies two numbers', expectate);

// it() or test() expects three arguments => test name/title whatever, function to be tested**, timeout(time to wait before abort the test, in milliseconds);
// function to be tested **: it's a callback function that calls the functions expect().toEqual() or expect().toBe();
// toBe() === .strictEqual();
// .toEqual() === .deepStrictEqual() proper for objects, but also works for NUMBERS;
// those functions are jest keywords, without them jest testing won't work at all;

// pq minha callback nao funcionou da maneira que eu esperava? O.o
