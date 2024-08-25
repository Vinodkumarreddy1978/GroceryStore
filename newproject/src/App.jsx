// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for the HomePage */}
                <Route path="/" exact element={<HomePage/>} />
                
                {/* Route for the LoginPage */}
                <Route path="/login" element={<LoginPage/>} />
                
                {/* Route for the SignupPage */}
                <Route path="/signup" element={<SignupPage/>} />
                
                {/* Route for the ProductPage */}
                <Route path="/products" element={<ProductPage/>} />
                
                {/* Route for the CartPage */}
                <Route path="/cart" element={<CartPage/>} />
                
                {/* Route for the PaymentPage */}
                <Route path="/payment" element={<PaymentPage/>} />
                
                {/* Fallback route for 404 Not Found */}
                <Route path="*">
                    <div className="text-center p-4">Page Not Found</div>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
