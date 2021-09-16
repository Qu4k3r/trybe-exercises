const urna = (votos) => {
  const numeroDeVotos = [];
  votos.forEach((ele, i, arr) => {
    const numeroDeCadaVoto = arr.filter((voto) => voto === ele).length;
    numeroDeVotos.push(numeroDeCadaVoto);
  });

  const maiorQteVotos = Math.max(...numeroDeVotos);

  const posicaoCandidatoVencedor = numeroDeVotos.indexOf(maiorQteVotos);

  console.log(
    `O Candidato ${votos[posicaoCandidatoVencedor]} ganhou com ${maiorQteVotos} votos`,
  );
};

urna(['A', 'B', 'C', 'C', 'D', 'A', 'C', 'B']);
