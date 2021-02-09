let fetch = require('node-fetch');

let fetchDogPictures = async () => {
  

  // json.status === 'success' ? 'Request success' : 'Request failed';

  // response.ok ? Promise.resolve(json) : Promise.reject(json);
  // console.log(json)
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await response.json();
    return json.message;
  } catch(e) {
    return e;
  }

};

describe('Testa as possiveis respostas da API', () => {

  // jest.mock('node-fetch');
  fetch = jest.fn();
  
  // fetchDogPictures = jest.fn();

  // afterEach(() => fetch.mockRestore());

  it('Testa se a resposta foi resolvida', () => {

    const mockedJson = {
      message: 'Request success',
    }

    fetch.mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(mockedJson) }));
    // fetchDogPictures.mockResolvedValue('Request success');

    return expect(fetchDogPictures()).resolves.toBe('Request success');
  });

  it('Testa se a resposta foi rejeitada', () => {

    const mockedJson = {
      message: 'Request failed',
    }

    fetch.mockImplementation(() => Promise.reject('erro'));
    // fetchDogPictures.mockRejectedValue('Request failed');

    return expect(fetchDogPictures()).rejects.toBe('erro');

  });
});


// {
//   status: 'error',
//   message: 'No route found for "GET /api/breeds/image/randomm" with code: 0',
//   code: 404
// }
