import React, { useEffect, useState } from 'react';
import { getProducts } from './api';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then(res => setProducts(res.data));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Product Management</h1>
            <ProductForm onProductAdded={(product) => setProducts([...products, product])} />
            <ProductList products={products} onProductDeleted={(id) => setProducts(products.filter(p => p._id !== id))} />
        </div>
    );
};

export default App;
