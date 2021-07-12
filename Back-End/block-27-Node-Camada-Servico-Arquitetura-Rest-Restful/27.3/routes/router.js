const express = require('express');
const ProductsController = require('../controllers/productController');

const router = express.Router();

router.use('/products', ProductsController);

module.exports = router;
