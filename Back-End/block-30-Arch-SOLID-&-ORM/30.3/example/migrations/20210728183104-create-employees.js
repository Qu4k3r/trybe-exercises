/* eslint-disable max-lines-per-function */
module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'first_name',
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'last_name',
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    }),

  down: async (queryInterface, _Sequelize) =>
    queryInterface.dropTable('Employees'),
};
