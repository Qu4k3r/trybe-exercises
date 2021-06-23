module.exports = classfyingNumbers = (number) => {
  if (number === 0) return 'neutro';
  if (isNaN(number)) return 'O parametro não é um numero';

  return number > 0 ? 'positivo' : 'negativo';
}
