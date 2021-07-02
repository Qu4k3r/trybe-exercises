const { connection } = require('./connection');

const addAuthorFullName = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
}

const convertFields = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const getAllAuthorsQuery = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors';

  const [authors] = await connection.execute(getAllAuthorsQuery);

  return authors.map(convertFields).map(addAuthorFullName);
};

const findAuthorById = async (id) => {
  const getByIdQuery = 'select * from model_example.authors as authors where authors.id = ?';

  const [[author]] = await connection.execute(getByIdQuery, [id]);

  if (!author) return null;

  const { firstName, middleName, lastName } = convertFields(author);
  
  return addAuthorFullName({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const addNewAuthor = async (firstName, middleName, lastName) => {
  const addNewAuthorQuerie = 'insert into model_example.authors (first_name, middle_name, last_name) values (?, ?, ?)';

  const [newAuthor] = await connection.execute(addNewAuthorQuerie, [firstName, middleName, lastName]);

  if (!newAuthor) return null;

  return newAuthor;
};

const isValid = (name) => (!name || typeof name !== 'string') && false;

module.exports = {
  getAll,
  findAuthorById,
  addNewAuthor,
  isValid,
};
