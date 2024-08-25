// src/pages/PaymentPage.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function PaymentPage() {
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: '',
        address: '',
    });
    const [errors, setErrors] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Mock payment process
        setTimeout(() => {
            setIsProcessing(false);
            alert('Payment successful!');
            // Redirect to a confirmation page or empty cart
        }, 2000);
    };

    return (
        <div>
            <Navbar />
            <main className="bg-gray-100 min-h-screen p-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Payment</h1>
                <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                            <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                required
                            />
                            {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
                        </div>
                        <div className="mb-4 flex space-x-4">
                            <div className="flex-1">
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    required
                                />
                                {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    required
                                />
                                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name on Card</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Billing Address</label>
                            <textarea
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                required
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full"
                            disabled={isProcessing}
                        >
                            {isProcessing ? 'Processing...' : 'Submit Payment'}
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default PaymentPage;
