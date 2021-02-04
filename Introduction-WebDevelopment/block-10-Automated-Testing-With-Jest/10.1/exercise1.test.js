function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

describe('Testing sum function with Jest', () => {
  it('The sum of 4 and 5 is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('if both parameters are 0 the result is 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Throws an error if one of the parameters is not a number', () => {
    expect(() => sum('1', 5).toThrow());
  });

  it('Verifies if the error msg is "parameters must be numbers"', () => {
    expect(() => sum('1', '2').toThrowError(/parameters must be numbers/));
  });
});
