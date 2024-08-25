import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index} className="mb-2">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <p className="font-bold mt-4">Total: ${total}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Proceed to Payment</button>
    </div>
  );
};

export default CartPage;
