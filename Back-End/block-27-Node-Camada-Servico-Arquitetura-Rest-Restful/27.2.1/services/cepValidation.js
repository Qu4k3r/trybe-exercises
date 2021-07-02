// camada responsavel pelas regras de negocio da aplicacao
// se relaciona diretamente com a camada models
const cepManipulation = require('../models/cepManipulation');
const cepHelper = require('../helpers/cepHelpers');

// Acho que seria uma boa ideia ter uma funcao
// pra cada regra de negocio

// verifica se o cep tem 8 digitos numericos e pode ou nao ser separado por um "-"

// As funcoes que manipulam o formato do cep (com "-" ou nao)
// e a funcao que verifica a expressao regular do cep, foram
// transferidas para um dir helpers para nao poluir muito este arquivo

// declaramos nossos objetos de erro
const invalidDataError = {
  error: {
    code: "invalidData",
    message: "CEP inválido",
  },
  status: 400,
};

const alreadyExistsError = {
  error: {
    code: "alreadyExists",
    message: "CEP já existente",
  },
  status: 409,
};

const notFoundError = {
  error: {
    code: "notFound",
    message: "CEP não encontrado",
  },
  status: 404,
};

// Verificamos se o cep passado na requisicao é valido ou nao
const cepIsValid = (cep) => cepHelper.verifyCep(cep);

// Agora, chamamos a camada model para realizar a busca no banco de dados
const getValidateCep = async (cep) => {
  const treatedCep = cepHelper.treatCep(cep);

  if (!cepIsValid) return invalidDataError;

  const cepFromDb = await cepManipulation.getCepFromDb(treatedCep);

  const cepObj = cepHelper.formatCepObj(cepFromDb);

  return cepObj || notFoundError;
};

const cepExists = async (cep) => {
  const treatedCep = cepHelper.treatCep(cep);
  const exists = await cepManipulation.getCepFromDb(treatedCep);

  return exists && true;
};

const postValidateCep = async (newCepObj) => {
  const formatedCep = cepHelper.formatCep(newCepObj.cep);
  const treatedCepObj = cepHelper.treatCepObj(newCepObj);
  const formatedCepObj = cepHelper.treatCepObj(newCepObj, true);

  if (await cepExists(formatedCep)) {
    return alreadyExistsError;
  }

  if (!cepIsValid(formatedCep)) {
    return invalidDataError;
  }

  return await cepManipulation.postCepIntoDb(treatedCepObj)
    && formatedCepObj;
};

module.exports = {
  getValidateCep,
  postValidateCep,
};
