// src/pages/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

function ProductPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Define an async function inside the useEffect
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/products/');
                setProducts(response.data);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };
    
        // Call the async function
        fetchProducts();
    }, []);
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Navbar />
            <main className="bg-gray-100 min-h-screen p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ProductPage;
