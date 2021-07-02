const Author = require('../models/Author');

module.exports = async(_req, res) => {
  const authors = await Author.getAll();
  res.json(authors);
};
