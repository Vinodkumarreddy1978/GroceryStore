// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';

function HomePage() {
    return (
        <div>
            <Navbar />
            <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-center p-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Grocery Store</h1>
                <p className="text-lg mb-8">Find the best deals on fresh groceries and more!</p>
                <img 
                    src="https://via.placeholder.com/800x400" 
                    alt="Grocery Store" 
                    className="w-full max-w-4xl mb-8"
                />
                <div>
                    <a 
                        href="/products" 
                        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
                    >
                        Shop Now
                    </a>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
