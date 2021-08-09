const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');

const { Address, Employee } = require('./models');

const app = express();

app.use(bodyParser.json());

const { PORT } = process.env || 3000;

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

app.use((err, _req, res, _next) => {
  console.error(err);
  return err.statusCode
    ? res.status(err.statusCode).json({ message: err.message })
    : res.status(500).json({ message: err.message });
});

app.listen(PORT, () => console.log('App running ...'));
