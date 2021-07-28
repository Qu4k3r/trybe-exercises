const { Books } = require('../models');

const getAllBooks = async (_req, res, _next) => {
  const allBooks = await Books.findAll({
    order: [['title', 'desc']],
  });

  return res.json(allBooks);
};

const createNewBook = async (req, res) => {
  console.log(req.body);
  const { title, author, pageQuantity } = req.body;
  const newBook = await Books.create({ title, author, pageQuantity });

  return res.json(newBook);
};

module.exports = {
  getAllBooks,
  createNewBook,
};
