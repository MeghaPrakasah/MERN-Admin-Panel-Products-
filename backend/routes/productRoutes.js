const express = require('express');
const { body, validationResult } = require('express-validator');
const Product = require('../models/Product');

const router = express.Router();

// Validation Rules
const productValidationRules = [
    body('title').isString().isLength({ min: 3, max: 50 }).withMessage('Title must be between 3 and 50 characters'),
    body('subtitle').isString().isLength({ min: 3, max: 100 }).withMessage('Subtitle must be between 3 and 100 characters'),
    body('price').isFloat({ min: 1 }).withMessage('Price must be greater than 0'),
    body('rating').isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5')
];

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Create new product with validation
router.post('/', productValidationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
});

// Update product with validation
router.put('/:id', productValidationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
});

// Delete product
router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
});

module.exports = router;
