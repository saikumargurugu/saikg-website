import React from 'react';
import InputField from '../../components/input/InputField'
import Button from '../../components/Buttons/Button'

const LoginPage = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
          <form>
            <InputField label="Email" type="email" id="email" placeholder="Enter your email" />
            <InputField label="Password" type="password" id="password" placeholder="Enter your password" />
            <Button text="Login" />
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    );
  };
  
  export default LoginPage;