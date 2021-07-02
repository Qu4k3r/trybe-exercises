import express from 'express';
const app = express();
import rescue from 'express-rescue';
import { readFile, writeFile } from 'fs/promises';

import 'dotenv/config';

// const soma = (req, res, next) => {
//   const { operacao, numero1, numero2 } = req.params;
//   const resultadoSoma = Number(numero1) + Number(numero2);

//   return operacao !== 'soma' ? next() : res.status(200).json({ resultadoSoma });
// }

// const subtracao = (req, res, next) => {
//   const { operacao, numero1, numero2 } = req.params;
//   const resultadoSubtracao = numero1 - numero2;

//   return operacao !== 'subtracao' ? next() : res.status(200).json({ resultadoSubtracao });
// }

// const divisao = (req, res, next) => {
//   const { operacao, numero1, numero2 } = req.params;
//   const resultadoDivisao = (numero1 / numero2).toFixed(2);

//   return operacao !== 'divisao' ? next() : res.status(200).json({ resultadoDivisao });
// }

// const multiplicacao = (req, res, next) => {
//   const { operacao, numero1, numero2 } = req.params;
//   const resultadoMultiplicacao = numero1 * numero2;

//   return operacao !== 'multiplicacao' ? next() : res.status(200).json({ resultadoMultiplicacao });
// }

// app
//   .get('/:operacao/:numero1/:numero2', soma, subtracao, divisao, multiplicacao);

// app.use((err, _req, res, _next) => {
//   res.status(500).json({ Erro: err.message })
// });

app
  .route('/recipe/:id')
  .post(rescue(async (req, res) => {
    const { id } = req.params;
    const file = await readFile(process.env.FILE_PATH, "utf-8");
    const fileToBeDeleted = JSON.parse(file).find(({id: recipeId}) => Number(recipeId) === +id);

    if (!fileToBeDeleted) {
      throw new Error("Recipe not found");
    }

    const newFile = JSON.parse(file).filter(({id: recipeId}) => Number(recipeId) !== Number(id));
    await writeFile(process.env.FILE_PATH, JSON.stringify(newFile));
    return res.status(200).json({fileToBeDeleted});
  }));

app.use((err, _req, res, _next) => {
  res.status(500).json({ Erro: err.message });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
