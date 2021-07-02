const Author = require('../models/Author');

module.exports = async(req, res) => {
  const { id } = req.params;
  const author = await Author.findAuthorById(id);

  return author ? res.json(author) : res.status(404).json({ message: 'Autor nao encontrado' });
};
