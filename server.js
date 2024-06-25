const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

const Product = mongoose.model('Product', {
    name: String,
    description: String,
    price: Number
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/api/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
