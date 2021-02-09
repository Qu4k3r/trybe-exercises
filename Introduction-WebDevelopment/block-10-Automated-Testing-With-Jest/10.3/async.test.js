const API_URL = 'https://icanhazdadjoke.com/';
const fetch = require('node-fetch')

let fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

jest.mock('node-fetch');

describe('Testa a requisição', () => {
  test('Testa se minha requisição foi resolvida', () => {

    const mockedJson = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200
    }

    fetch.mockImplementation(() => Promise.resolve({ json: fetch.mockResolvedValue(mockedJson) }));

    // const result = await fetchJoke();
    // expect(result).toEqual('Whiteboards ... are remarkable.');

    // OU (sem o async)

    expect(fetchJoke()).resolves.toEqual('Whiteboards ... are remarkable.');

  });


})
