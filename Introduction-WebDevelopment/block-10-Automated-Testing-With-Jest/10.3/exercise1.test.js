let randomNumber = () => Math.floor(Math.random() * 101);

describe('Teste de uma função que retorna um número aleatório', () => {
  it('Testa se a chamada da função, seu retorno e quantas vezes foi chamada', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});
