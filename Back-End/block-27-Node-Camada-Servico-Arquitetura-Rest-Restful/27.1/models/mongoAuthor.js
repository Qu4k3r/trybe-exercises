const { ObjectId } = require('mongodb');
const { isValid } = require('./Author');
const connection = require('./mongoConnection');

const formatData = ({ _id, firstName, middleName, lastName }) => ({
  id: _id,
  firstName,
  middleName,
  lastName,
  fullName: [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' '),
});

const getAll = async () => {
  const db = await connection();
  const allAuthors = await db.collection('authors')
    .find()
    .toArray();

  return allAuthors.map(formatData);
};

const findAuthorById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();

  const authors = await db.collection('authors');

  const authorData = await authors
    .findOne({_id: ObjectId(id)})

  if (!authorData) return null;
  
  return [authorData].map(formatData);
};

const createAuthor = async (firstName, middleName, lastName) => {
  const db = await connection();

  const addNewAuthor = await db.collection('authors').insertOne({ firstName, middleName, lastName });

  return addNewAuthor;
};

module.exports = {
  getAll,
  findAuthorById,
  createAuthor,
};
