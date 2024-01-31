// pages/login.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update with your Netlify function endpoint
    const endpoint = '/api/login';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      router.push('/');
      // You can store the token in localStorage or handle it as needed
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
      <h1 className="text-4xl mb-6 font-bold text-slate-100" style={{ fontFamily: 'Poppins-Light' }}>Stats Login</h1>
      <form onSubmit={handleSubmit} className="w-96 bg-slate-700 p-8 rounded-lg">
        <div className="mb-4">
          <label className="text-slate-100 block mb-2" htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>
        <div className="mb-4">
          <label className="text-slate-100 block mb-2" htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>
        <button type="submit" className="w-full p-2 bg-emerald-500 text-slate-100 rounded hover:bg-emerald-600">Login</button>
      </form>
      {message && <p className="text-bright-red mt-4">{message}</p>}
    </div>
  );
};

export default LoginPage;
