const connection = require('./mongoConnection');

const formatUserData = (({ _id, firstName, lastName, password }) => ({
  id: _id,
  firstName,
  lastName,
  password,
}));

const addUser = async (firstName, lastName, password) => {
  const db = await connection();
  const newUser = await db.collection('users').insertOne({ firstName, lastName, password });

  const getNewUser = await db.collection('users').findOne({firstName});
  return newUser && [getNewUser].map(formatUserData)[0];
};

module.exports = {
  addUser,
};
