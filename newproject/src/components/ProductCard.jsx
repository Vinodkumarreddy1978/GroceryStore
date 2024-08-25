// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg">
            <img
                src={product.image_url || 'https://via.placeholder.com/150'}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <Link
                to={`/cart`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add to Cart
            </Link>
        </div>
    );
}

export default ProductCard;
