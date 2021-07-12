const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/router');

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.use(router);

app.listen(PORT, () => console.log('App running ...'));
