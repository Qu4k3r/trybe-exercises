let fetch = require('node-fetch');

let fetchDogPictures = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const json = await response.json();

  json.status === 'success' ? 'Request success' : 'Request failed';

};

describe('Testa as possiveis respostas da API', () => {

  fetchDogPictures = jest.fn();

  it('Testa se a resposta foi resolvida', () => {
    fetchDogPictures.mockResolvedValue('Request success');

    return expect(fetchDogPictures()).resolves.toEqual('Request success');
  });

  it('Testa se a resposta foi rejeitada', () => {
    fetchDogPictures.mockResolvedValue('Request failed');

    return expect(fetchDogPictures()).resolves.toEqual('Request failed');

  });
});
