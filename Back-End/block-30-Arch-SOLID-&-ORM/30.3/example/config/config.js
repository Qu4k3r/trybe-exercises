require('dotenv/config');

module.exports = {
  development: {
    username: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DB,
    host: process.env.MY_SQL_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DB,
    host: process.env.MY_SQL_HOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
    database: process.env.MY_SQL_DB,
    host: process.env.MY_SQL_HOST,
    dialect: 'mysql',
  },
};
