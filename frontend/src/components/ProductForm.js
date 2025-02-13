import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api';

const ProductForm = ({ productToEdit, onProductUpdated, onProductAdded }) => {
    const [product, setProduct] = useState({ title: '', subtitle: '', price: '', rating: '' });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (productToEdit) {
            setProduct(productToEdit);
        }
    }, [productToEdit]);

    const validateForm = () => {
        let newErrors = {};

        if (!product.title || product.title.length < 3 || product.title.length > 50) {
            newErrors.title = 'Title must be between 3 and 50 characters';
        }
        if (!product.subtitle || product.subtitle.length < 3 || product.subtitle.length > 100) {
            newErrors.subtitle = 'Subtitle must be between 3 and 100 characters';
        }
        if (!product.price || product.price < 1) {
            newErrors.price = 'Price must be greater than 0';
        }
        if (product.rating === '' || product.rating < 0 || product.rating > 5) {
            newErrors.rating = 'Rating must be between 0 and 5';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            if (productToEdit) {
                const res = await updateProduct(product._id, product);
                onProductUpdated(res.data);
            } else {
                const res = await createProduct(product);
                onProductAdded(res.data);
            }
            setProduct({ title: '', subtitle: '', price: '', rating: '' });
            setErrors({});
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-2">
                <input type="text" className={`form-control ${errors.title ? 'is-invalid' : ''}`} placeholder="Title" value={product.title} onChange={e => setProduct({ ...product, title: e.target.value })} />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>

            <div className="mb-2">
                <input type="text" className={`form-control ${errors.subtitle ? 'is-invalid' : ''}`} placeholder="Subtitle" value={product.subtitle} onChange={e => setProduct({ ...product, subtitle: e.target.value })} />
                {errors.subtitle && <div className="invalid-feedback">{errors.subtitle}</div>}
            </div>

            <div className="mb-2">
                <input type="number" className={`form-control ${errors.price ? 'is-invalid' : ''}`} placeholder="Price" value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} />
                {errors.price && <div className="invalid-feedback">{errors.price}</div>}
            </div>

            <div className="mb-2">
                <input type="number" className={`form-control ${errors.rating ? 'is-invalid' : ''}`} placeholder="Rating" value={product.rating} onChange={e => setProduct({ ...product, rating: e.target.value })} />
                {errors.rating && <div className="invalid-feedback">{errors.rating}</div>}
            </div>

            <button type="submit" className="btn btn-primary">{productToEdit ? 'Update Product' : 'Add Product'}</button>
        </form>
    );
};

export default ProductForm;
