
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  // escreva seu código aqui
  const arrayOfAs = names.map(word => word.split('').filter(letter => letter === 'a' || letter === 'A'));
  // const arrayOfAs = names.map(word => word.split('').filter(letter => /a/.test(letter) || /A/.test(letter)));
  return arrayOfAs.reduce((prev, curr) => prev + curr.length, 0)
}

assert.deepStrictEqual(containsA(), 20);
