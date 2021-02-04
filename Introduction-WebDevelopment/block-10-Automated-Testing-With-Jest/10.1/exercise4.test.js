function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe('Testing myFizzBuzz with Jest', () => {
  it('Returns "fizzbuzz" if  the parameter is a number multiple of 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Returns "fizz" if the number called is multiple of 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Verifies if the return string is "buzz" when called a multiple of 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('NOT returns "fizzbuzz" when te parameter is not a multilpe of 3 and 5', () => {
    expect(myFizzBuzz(7)).not.toBe('fizzbuzz');
  });

  it('Verifies if the parameter is a number', () => {
    expect(myFizzBuzz('NaM')).toBeFalsy();
  });
});
