let randomNumber = () => Math.floor(Math.random() * 101);

describe('Teste de uma função que retorna um número aleatório', () => {
  it('Testa se a funcao foi chamada, seu retorno e quantas vezes foi chamada', () => {
    randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    
    expect(randomNumber(4, 2)).toBe(2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(4, 2);
  });
});
