const { ObjectId } = require('mongodb');
const connection = require('./connection');

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

const findAuthorByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  const query = middleName
    ? { firstName, middleName, lastName }
    : { firstName, lastName };

  // Executamos a consulta e retornamos o resultado
  const author = await connection()
  .then((db) => db.collection('authors').findOne(query));

  // Caso nenhum author seja encontrado, devolvemos null
  if (!author) return null;

  // Caso contrário, retornamos o author encontrado
  return [author].map(formatData);
};

const isNonEmptyString = (value) => {
  if (!value) return false;

  return typeof value === 'string';
};

const isValid = (firstName, middleName, lastName) => {
  if (middleName && typeof middleName !== 'string') return false;

  return isNonEmptyString(firstName) && isNonEmptyString(lastName);
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
  isValid,
  createAuthor,
  findAuthorByName,
};
