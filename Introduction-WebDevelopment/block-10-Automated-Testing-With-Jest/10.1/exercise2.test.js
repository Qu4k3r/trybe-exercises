function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

describe('Testing myRemove func with Jest', () => {
  it('Removes number 3', () => {
    expect(myRemove([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
  });

  it('Verifies if returned array is NOT [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifies NO modifications in the original array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  it('Verifies if the return is the original array', () => {
    expect(myRemove([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4]);
  });
});
