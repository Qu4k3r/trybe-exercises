const { isValid } = require('../models/Author');
const mongoAuthor = require('../models/mongoAuthor');

module.exports = async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (
    !isValid(firstName) &&
    !isValid(middleName) &&
    !isValid(lastName)
  ) {
    const newAuthor = await mongoAuthor.createAuthor(firstName, middleName, lastName);

    return newAuthor && res.status(201).json({ message: 'Autor adicionado com sucesso' });
  }

  return res.status(400).json({ message: 'Algum campo não é valido' });
};
