require('dotenv/config');

const jwt = require('jsonwebtoken');

const users = require('../models');

const SECRET = process.env.JWT_SECRET;

const validateUser = (userName, token) => {
  const payload = jwt.verify(token, SECRET) || {};

  const user = payload?.userName; // se (payload) {} entao (user) undefined

  const findUser = users.find(({ userName }) => userName === user);

  const { password, ...userWithoutPassword } = findUser;

  return userWithoutPassword;
};

const verifyUser = (userName) => /^[a-zA-Z_-]{5,}$/m.test(userName);

const verifyPassword = (password) => password.length >= 5;

const isAdmin = (userName, password) => {
  if (userName === 'admin' && password === 's3nh4S3gur4???') {
    return {
      userName,
      admin: true,
    };
  }

  return {
    userName,
    admin: false,
  };
};

const generateToken = (userName, password) => {
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const payload = isAdmin(userName, password);

  const token = jwt.sign(payload, SECRET, jwtConfig);

  return token;
};

module.exports = {
  validateUser,
  isAdmin,
  verifyUser,
  verifyPassword,
  generateToken,
};
