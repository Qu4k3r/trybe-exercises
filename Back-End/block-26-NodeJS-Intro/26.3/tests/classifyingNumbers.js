const { expect } = require('chai');
const classifyingNumbers = require('../examples/classifyingNumbers');

describe('Testa funcao que classifica um numero', () => {

  describe('Quando o parametro passado não é um numero', () => {

    it('Retorna uma mensagem de erro', () => {
      expect(classifyingNumbers('teste')).to.be.a('string');
      expect(classifyingNumbers('teste')).to.match(/não é um numero/i);
    });
  });
  
  describe('Quando o parametro passado é um numero', () => {

    it('Quando o numero é positivo', () => {
      expect(classifyingNumbers(5)).equals('positivo');
    });

    it('Quando o numero é negativo', () => {
      expect(classifyingNumbers(-5)).equals('negativo');
    });

    it('Quando o numero é neutro', () => {
      expect(classifyingNumbers(0)).equals('neutro');
    });
  });
});


/**
 * descreva funcao que classifica um numero
 * quando o numero é positivo
 * quando o numero é negativo
 */