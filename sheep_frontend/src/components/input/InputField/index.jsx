import React from 'react';

const InputField = ({ label, type, id, placeholder }) => (
    <div className="mb-4">
      <label className="block text-gray-600 text-sm mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder={placeholder}
      />
    </div>
  );
  
export default InputField;