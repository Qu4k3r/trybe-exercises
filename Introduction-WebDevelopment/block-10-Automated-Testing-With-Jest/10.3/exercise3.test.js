let randomNumber = () => Math.floor(Math.random() * 101);

describe('Testa novas implementaçoes da funcao randomNumber', () => {

  afterEach(() => {
    randomNumber = jest.fn().mockReset();
  });

  it('Testa que recebe 3 numeros como parametros e retorna sua multiplicacao', () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(randomNumber(2, 3, 5)).toBe(30);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 3, 5);
  });

  it('Testa outra implementacao que rece um parametro e retorna o seu dobre', () => {
    randomNumber = jest.fn().mockImplementation(num => num * 2);
    expect(randomNumber(7)).toBe(14);
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(7);
  });
});
