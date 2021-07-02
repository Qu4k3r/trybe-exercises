const verifyCep = (cep) => cep.match(/^[0-9]{5}-?[0-9]{3}$/);

const formatCep = (cep) => cep.replace(/(^[0-9]{5})([0-9]{3}$)/, '$1-$2');

const treatCep = (cep) => cep.replace('-', '');

const treatCepObj = (newCepObj, format = false) => {
  const { cep, logradouro, bairro, localidade, uf } = newCepObj;

  if (format) {
    return {
      cep: formatCep(cep),
      logradouro,
      bairro,
      localidade,
      uf,
    };
  }

  return {
    cep: treatCep(cep),
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

module.exports = {
  verifyCep,
  formatCep,
  treatCep,
  treatCepObj,
};
