const Author = require('../models/Author');

module.exports = (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (
    !Author.isValid(firstName) &&
    !Author.isValid(middleName) &&
    !Author.isValid(lastName)
  ) {
    return Author.addNewAuthor(firstName, middleName, lastName) &&
      res.status(201).json({ message: 'Autor criado com sucesso!' });
  }
  
  return res.status(400).json({ message: 'Algum campo nao é valido' });
};
