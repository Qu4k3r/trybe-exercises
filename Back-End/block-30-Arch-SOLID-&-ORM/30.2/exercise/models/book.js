const Books = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });

  return Books;
};

module.exports = Books;
