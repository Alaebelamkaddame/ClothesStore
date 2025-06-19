'use client';

import React, { useState } from 'react';

function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const admin_username = process.env.NEXT_PUBLIC_ADMIN_USERNAME
  const admin_password = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === admin_username && password === admin_password) {
      window.location.href = '/AddProduct'; // Full page reload
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-[url('https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/motorcycles/tiger%20sport%20800%20-%202025/my25-tiger-sport-800-hero-thumbnail-1920x1080.jpg')] bg-cover bg-center"
        style={{ zIndex: -1 }}
      />

      {/* Login form */}
      <div className="flex items-center justify-center h-full">
        <form onSubmit={handleSubmit} className="bg-white text-black bg-opacity-80 p-8 rounded-lg shadow-xl max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Admin Login</h2>
          
          <label className="block text-lg font-medium mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
            required
          />

          <label className="block text-lg font-medium mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 border rounded"
            required
          />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full cursor-pointer bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    
  );
}

export default Page;
