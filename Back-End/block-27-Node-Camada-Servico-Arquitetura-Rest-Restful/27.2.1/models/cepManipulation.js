// Models => Modelagem, tratamento e manipulacao dos dados vindo do DB
const connectionPool = require("./connection");

const getCepFromDb = async (cep) => {
  const findCepQuery = 'select * from cep_lookup.ceps as ceps where ceps.cep = ?'; 
  const [cepFromDb] = await connectionPool.execute(findCepQuery, [cep]);

  // console.log(cepFromDb, cep); // []

  // return cepFromDb[0] ou falso;
  return cepFromDb.length ? cepFromDb[0] : false;
};

const postCepIntoDb = async (newCepObj) => {
  const { cep, logradouro, bairro, localidade, uf } = newCepObj;

  const insertCepQuery = 'insert into cep_lookup.ceps(cep,logradouro,bairro,localidade,uf) values(?, ?, ?, ?, ?)';

  const newData = [cep, logradouro, bairro, localidade, uf];

  return await connectionPool.execute(insertCepQuery, newData) && newCepObj;
};

module.exports = {
  getCepFromDb,
  postCepIntoDb,
};
