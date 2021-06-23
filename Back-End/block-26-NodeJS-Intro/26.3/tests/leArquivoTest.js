const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const leArquivo = require('../examples/leArquivo');

const FILE_CONTENT = "VQV COM TDD";

describe('Testando partes de uma aplicacao desenvolvida em TDD', () => {
  describe('Testa funcao leArquivo', () => {
    describe('Quando o arquivo existe', () => {
      before(() => {
        sinon.stub(fs, 'readFileSync').returns(FILE_CONTENT);
      });

      after(() => {
        fs.readFileSync.restore();
      });

      it('Seu conteúdo é uma string igual ao conteudo do arquivo', () => {
        const result = leArquivo('arquivo.txt');

        expect(result).to.be.a('string');
        expect(result).equals(FILE_CONTENT);
      });
    });

    describe('Quando o arquivo não existe', () => {
      it("O retorno da função é 'null'", () => {
        const result = leArquivo('whatever.txt');

        expect(result).equals(null);
      });
    });
  });
});
