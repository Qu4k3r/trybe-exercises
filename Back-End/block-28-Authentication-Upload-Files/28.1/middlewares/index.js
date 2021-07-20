require('dotenv/config');

const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

// aqui, nao tem pra onde fugir: middleware de autenticacao, com chamada de validations/services que chama a models para verificar a autenticacao do usuario
const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found!' });

  const payload = jwt.verify(token, SECRET) || {};

  if(!payload) return next({ message: 'Token inválido.' })

  req.user = payload;

  return next();
};

module.exports = {
  validateToken,
};
