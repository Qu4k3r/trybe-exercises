const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testing possibles return values of function findUserById', () => {
  it('Returns the correct user ID when called', async (done) => {
    // teste sem trycatch, porem, nao sera possivel detectar o erro, caso ocorra (nao esquecer de colocar o async e o parametro done). Exemplo:
    expect.assertions(1);
    expect(await getUserName(4)).toBe('Mark');
    done();
    // Obs.: sempre usar done em async await
  });
  
  it('Should return an error msg if the user can\'t be found', async (done) => {
    // expect.assertions(1);
    // expect(getUserName(2)).rejects.toEqual({ error: 'User with ' + 2 + ' not found.' })

    try {
      await getUserName(2);
    }

    catch(e) {
      expect(e).toEqual({ error: 'User with 2 not found.' });
      done();
    }
    
  });
});
