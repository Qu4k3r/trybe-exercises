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

// Exemplo para abstração de declaração do valor retornado pela promise
// const userName = getUserName(4)
// userName.then((name) => console.log(name))

describe('Testing possibles return values of function findUserById', () => {
  it('Returns the correct user ID when called', () => {
    return expect(getUserName(4)).resolves.toBe('Mark');
  });

  it('Should return an error msg if the user can\'t be found', () => {
    return expect(getUserName(1)).rejects.toEqual({ error: 'User with 1 not found.' })
  });
});
