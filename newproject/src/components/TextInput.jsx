// src/components/TextInput.jsx
import React from 'react';

function TextInput({ id, name, value, onChange, type = 'text', label, error }) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

export default TextInput;
