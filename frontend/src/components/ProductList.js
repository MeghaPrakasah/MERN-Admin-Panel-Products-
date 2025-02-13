import React from 'react';
import { deleteProduct } from '../api';

const ProductList = ({ products, onProductDeleted, onProductEdit }) => {
    if (products.length === 0) {
        return <p className="text-center text-muted">No products available</p>;
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>Price ($)</th>
                    <th>Rating</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={product._id}>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td>{product.subtitle}</td>
                        <td>{product.price}</td>
                        <td>{product.rating}</td>
                        <td>
                            <button className="btn btn-warning me-2" onClick={() => onProductEdit(product)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => { deleteProduct(product._id); onProductDeleted(product._id); }}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductList;
