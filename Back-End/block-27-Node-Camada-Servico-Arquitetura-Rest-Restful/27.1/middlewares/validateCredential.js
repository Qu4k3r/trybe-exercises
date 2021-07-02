const rescue = require('express-rescue');
const createUser = require('../models/createUser');

const firstName = (req, _res, next) => {
  const { firstName } = req.body;

  if (!firstName || typeof firstName !== 'string') {
    return next({ status: 400, error: true, message: `${firstName} inválido!` });
  }
  
  return next();
};

const lastName = (req, _res, next) => {
  const { lastName } = req.body;

  if (!lastName || typeof lastName !== 'string') {
    return next({ status: 400, error: true, message: `${lastName} inválido!` });
  }

  return next();
};

const password = (req, _res, next) => {
  const { password } = req.body;

  if (password.length < 6 || typeof password !== 'string') {
    return next({ status: 400, error: true, message: `${password} inválido!` });
  }

  return next();
};

const validateUser = rescue(async (req, res) => {
  const { firstName, lastName, password } = req.body;

  const newUser = await createUser.addUser(firstName, lastName, password);

  return res.status(201).json(newUser);
});

module.exports = {
  firstName,
  lastName,
  password,
  validateUser,
};
