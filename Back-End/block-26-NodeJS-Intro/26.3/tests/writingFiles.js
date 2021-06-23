const sinon = require('sinon');
const { expect } = require('chai');
const fs = require('fs/promises');

const writingFiles = require('../examples/writingFiles');

describe('Testa uma funcao que escreve conteudos em um arquivo', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });

  it('verifica se o conteudo do arquivo é uma string', async () => {
    expect(await writingFiles('arquivoTeste.txt', 'teste')).to.be.a('string');
  });

  it('Verifica a equivalencia do conteudo', async () => {
    expect(await writingFiles('arquivoTeste.txt', 'teste')).equals('teste');
  });
});

// writingFiles('arquivoTeste.txt', 'hello').then((res) => console.log(res));

/**
 * descreva uma funcao que escreve conteudos em um arquivo
 * verifica se o conteudo é uma string
 * verifica a equivalencia do conteudo e do paramentro passado na funcao testada
 */