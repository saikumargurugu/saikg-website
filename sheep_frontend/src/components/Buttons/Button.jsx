import React from 'react';

 const Button = ({ text, onClick }) => (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
    >
      {text}
    </button>
  );

  export default Button