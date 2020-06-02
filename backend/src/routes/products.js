const { Router } = require('express');
const router = Router();
const productsCtrl = require('../controllers/products.controllers');


router.route('/')
    .post(productsCtrl.createProducts)
    .get(productsCtrl.getProducts)


router.route('/:id')
    .delete(productsCtrl.deleteProducts)
    .put(productsCtrl.updateProducts);


module.exports = router;