const express = require('express');
const ProductModel = require('../models/productModel');
const router = require('../routes/router');

// todas as requisicoes devem conter casos de sucesso e falha

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  // if cai bem aqui com um 404

  res.json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  
  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.status(410).json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(204).json(products);
});

module.exports = router;
