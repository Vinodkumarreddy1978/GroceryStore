// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

function SignupPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
  
      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
          setErrors({ confirmPassword: "Passwords do not match" });
          return;
      }
  
      try {
          // Make the API request
          const response = await axios.post('http://127.0.0.1:8000/api/register/', formData);
          // Redirect to the login page on success
          history('/login');
      } catch (error) {
          // Handle the error by setting the errors state
          setErrors({ ...error.response.data });
      }
  };
  

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        label="Username"
                        error={errors.username}
                    />
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
                    <TextInput
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        label="Confirm Password"
                        error={errors.confirmPassword}
                    />
                    <SubmitButton>Sign Up</SubmitButton>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
