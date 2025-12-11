const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().limit(50);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const p = new Product({ name, price, description });
    await p.save();
    res.status(201).json(p);
  } catch (err) {
    res.status(400).json({ error: 'Bad request' });
  }
};
