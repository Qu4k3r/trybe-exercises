const mongoAuthor = require('../models/mongoAuthor');

module.exports = async (req, res) => {
  const { id } = req.params;

  const getAuthorById = await mongoAuthor.findAuthorById(id);

  if (!getAuthorById) return res.status(404).json({ message: 'Autor nao encontrado' });

  return res.json(getAuthorById);
};
