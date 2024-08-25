// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const history = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
          const response = await axios.post('http://127.0.0.1:8000/api/token/', formData);
          // Save the token or handle authentication
          localStorage.setItem('token', response.data.access);
          history('/products'); // Redirect to the products page or wherever needed
      } catch (error) {
          setErrors({ ...error.response.data });
      }
  };
  

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        label="Email"
                        error={errors.email}
                    />
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        label="Password"
                        error={errors.password}
                    />
                    <SubmitButton>Login</SubmitButton>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
