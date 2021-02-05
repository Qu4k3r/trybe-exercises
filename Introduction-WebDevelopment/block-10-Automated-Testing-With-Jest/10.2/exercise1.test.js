const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('The parameter must be converted to uppercase', done => {
  const paramFunc = str => str.toUpperCase();
  expect.assertions(1);
  expect('HELLO').toBe(paramFunc('hello'));
  done();
  uppercase('hello', paramFunc)
});
