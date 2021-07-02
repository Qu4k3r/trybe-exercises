const bodyParser = require('body-parser');
const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');
require('dotenv/config');
const app = express();

app.use(bodyParser.json());

// Exercicio 1
// app
//   .route('/ping')
//   .get((req, res) => {
//     res.json({ message: "pong" });
//   })

// Exercicio 2
// app
//   .route('/hello')
//   .post((req, res) => {
//     const { name } = req.body;
//     res.json({message: `Hello, ${name}`})
//   });

// Exercicio 3
// app
//   .route('/greetings')
//   .post((req, res) => {
//     const { name, age } = req.body;
//     if (age > 17) {
//       res.status(200).json({ message: `Hello, ${name}` });
//     } else {
//       res.status(401).json({ message: "Unauthorized!" });
//     }
//   });

// Exercicio 4
// app
//   .route('/users/:name/:age')
//   .put((req, res) => {
//     const { name, age } = req.params;
//     res.status(200).json({ message: `Seu nome é ${name} e voce tem ${age} anos` });
//   });

// Exercicio 5
// const simpsons = process.env.SECRET_PATH;

// app
//   .route('/api/:fileName')
//   .get(rescue(async (req, res) => {
//     const { fileName } = req.params;
//     if (fileName === 'simpsons') {
//       const file = await fs.readFile(simpsons, "utf-8");;
//       res.status(200).json(JSON.parse(file));
//     }
//   }));

// app.use((err, _req, res, _next) => {
//   res.status(500).json({ error: `${err.message}` });
// });

// app.listen(3000, () => console.log("Server listening on port 3000... "));

// Exercicio 7
// const simpsons = process.env.SECRET_PATH;

// app
//   .route('/api/simpsons/:id')
//   .get(rescue(async (req, res) => {
//     const { id } = req.params;
//     const file = await fs.readFile(simpsons, "utf-8");
//     const getSimpsonById = JSON.parse(file).find(({id: simpsonId}) => simpsonId === id);
//     if (!getSimpsonById) return res.json({ message: "simpson not found" });
//     res.json(getSimpsonById);
//   }));

// app.use((err, _req, res, _next) => {
//   res.status(500).json({ error: `${err.message}` });
// });

//Exercicio 8

app.listen(3000, () => console.log("Server listening on port 3000... "));