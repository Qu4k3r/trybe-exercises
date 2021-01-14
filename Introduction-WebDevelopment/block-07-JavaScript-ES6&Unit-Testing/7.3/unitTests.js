const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, '5'), 9);

// ========================================================

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4]);
assert.notDeepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4]);
assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4]);
assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4]);

// ========================================================

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }
  return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4]);
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 5), [1,2,3,4]);

// ========================================================

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz');
assert.strictEqual(myFizzBuzz(25), 'buzz');
assert.strictEqual(myFizzBuzz(29), 29);
assert.strictEqual(myFizzBuzz('ola'), 'false');

// ========================================================

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2, 'Não são iguais!')
assert.notDeepStrictEqual(obj3, obj2, 'Não são iguais!')

// ========================================================

// escreva a função addOne aqui
const addOne = arr => {
  const newArray = [];
  arr.forEach(element => {
    newArray.push(element += 1);
  });
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// ========================================================

// escreva a função wordLengths aqui
const wordLengths = arr => {
  const result = [];
  arr.forEach(element => {
    result.push(element.length)
  });
  return result;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expectedResult = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const expectedOutput = wordLengths(words);
assert.deepStrictEqual(expectedOutput, expectedResult);

// ========================================================

// escreva a função sumAllNumbers aqui
const sumAllNumbers = arr => arr.reduce((val1, val2) => val1 + val2);

const numbers = [9, 23, 10, 3, 8];
const summation = 53;
const result = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(result, summation);

// ========================================================

// escreva a função findTheNeedle aqui
const findTheNeedle = (arr, str) => arr.indexOf(str);

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);

// ========================================================

const greetPeople = (people) => {
  let greeting = 'Hello ';
  const result = [];
  for (const person in people) {
    result.push(greeting += people[person]);
    greeting = 'Hello ';
  }
  return result;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);

// ========================================================

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let incr = 0;
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      incr += 1;
      results.push(incr);
    } else {
      results.push(characters[i]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';
assert.strictEqual(removeVowels(parameter), result);

// ========================================================

const greaterThanTen = (array) => {
  const results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);

// ========================================================

function secondThirdSmallest(array) {
  const results = []
  array.sort((smaller, bigger) => smaller -bigger);
  results.push(array[1], array[2]);
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
