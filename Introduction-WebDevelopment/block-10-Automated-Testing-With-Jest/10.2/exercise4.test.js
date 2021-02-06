const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => data.map(({ name }) => name))
    .catch(error => error.message);
};

describe('Testa a resposta de uma API', () => {
  it('Testa se os os repositorios dos projetos todo-list e meme-generator estao na lista retornada', async (done) => {
    
    try {
      const repoNames = await getRepos('https://api.github.com/orgs/tryber/repos');
      expect(repoNames).toContain('sd-01-week4-5-project-todo-list');
      expect(repoNames).toContain('sd-01-week4-5-project-meme-generator');
      expect.assertions(2);
      done();
      
    } catch(error) {
      done(error);
    }

    // Ou: sem async, await e done:
    // return expect(repoNames).resolves.toEqual(expect.arrayContaining(['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator']));
  });
});
