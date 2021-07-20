const services = require('../services');

const getUser = (req, res, _next) => {
  const token = req.headers.authorization;
  const { userName } = req.params;

  // const user = services.getUser(userName, token);

  return user.message ? next(user) : res.json(user);
  // return res.json({ user });
};

const login = (req, res, next) => {
  const { userName, password } = req.body;

  const getToken = services.loginToken(userName, password);

  // aqui realmente seria o retorno do controller, nao gosto de middlewares
  return getToken.message ? next(getToken) : res.json({ token: getToken });
};

module.exports = {
  getUser,
  login,
};
