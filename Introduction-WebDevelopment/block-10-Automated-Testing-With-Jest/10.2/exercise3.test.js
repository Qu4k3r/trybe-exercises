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
  it('Returns the correct user ID when called', async () => {
    expect.assertions(1);
    const userName = await getUserName(4);
    expect(userName).toBe('Mark');
  });
  
  it('Should return an error msg if the user can\'t be found', async () => {
    expect.assertions(1);
    try {
      await getUserName(2);
    }

    catch(e) {
      expect(e).toEqual({ error: 'User with 2 not found.' });
    }
  });
});
