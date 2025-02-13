const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 3, maxlength: 50 },
    subtitle: { type: String, required: true, minlength: 3, maxlength: 100 },
    price: { type: Number, required: true, min: 1 },
    rating: { type: Number, required: true, min: 0, max: 5 }
});

module.exports = mongoose.model('Product', ProductSchema);
