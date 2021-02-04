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

// implemente seus testes aqui

describe('Testing myRemoveWithoutCopy function with Jest', () => {
  it('Veririfies if the function is working as expected', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toContain(3);
  });

  it('Another simple test as the first one', () => {
    expect(myRemoveWithoutCopy([1, 2, 3], 2)).not.toEqual([1, 2, 3]);
  });

  it('Verifies modifications in original array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 0)).not.toContain(0);
  });

  it('Ensures the returned array is the expected one', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).not.toContain(5);
  });
});
