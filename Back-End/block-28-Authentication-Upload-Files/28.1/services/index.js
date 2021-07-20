const validations = require('../validations');

const loginToken = (userName, password) => {
  if (!validations.verifyUser(userName)) {
    return {
      message: 'Login deve ter no minimo 5 caracteres.' 
    }
  }
  
  if (!validations.verifyPassword(password)) {
    return {
      message: 'Password deve ter no minimo 5 caracteres.'
    }
  }

  const token = validations.generateToken(userName, password);

  return token;
};

// const getUser = (userName) => {
//   if (!validations.va)
// };

module.exports = {
  loginToken,
  // getUser,
};
