// Controllers => camada responsavel por encaminhar/receber as requisicoes
// para/da camada de serviço
// (Nunca relacionar essa camada diretamente com a camada de modelo)
const rescue = require('express-rescue');
const cepValidation = require('../services/cepValidation');

const getRequestionCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const getCep = await cepValidation.getValidateCep(cep);

  return !getCep.status ? res.json(getCep) : next(getCep);
});

const postRequestionCep = rescue(async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const newCepObj = {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };

  const postCep = await cepValidation.postValidateCep(newCepObj);

  return !postCep.status ? res.status(201).json(postCep) : next(postCep);
});

module.exports = {
  getRequestionCep,
  postRequestionCep,
};
