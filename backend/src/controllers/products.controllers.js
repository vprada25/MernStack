const productsCtrl = {};
const product = require('../models/Product');


productsCtrl.getProducts = async (req, res) => {
    const producto = await product.find();
    res.json(producto)
};


productsCtrl.createProducts = async (req, res) => {
    const { productname } = req.body;

    const producto = new product({
        productname: productname
    });

    await producto.save();

    res.json({ message: 'prduct saved' })
};

productsCtrl.updateProducts = (req, res) => res.json({ message: 'updated product' });


productsCtrl.deleteProducts = async (req, res) => {
    await product.findOneAndDelete(req.params.id)
    res.json({ message: 'prduct deleted' })
};









module.exports = productsCtrl;