const mongoAuthor = require('../models/mongoAuthor');

module.exports = async (req, res) => {
  const allAuthors = await mongoAuthor.getAll();

  if (!allAuthors) return res.status(404).json({ message: 'Not Found!' });

  return res.json(allAuthors);
};
