// src/components/SubmitButton.jsx
import React from 'react';

function SubmitButton({ children }) {
    return (
        <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            {children}
        </button>
    );
}

export default SubmitButton;
