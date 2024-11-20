import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock role-based authentication
    const roles = {
      admin: 'admin@example.com',
      user: 'user@example.com',
      student: 'student@example.com',
    };

    if (email === roles.admin && password === 'admin123') {
      navigate('/admin-dashboard');
    } else if (email === roles.user && password === 'user123') {
      navigate('/user-dashboard');
    } else if (email === roles.student && password === 'student123') {
      navigate('/student-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Welcome Back</h2>
        <form>
          <div className="mb-3">
            <label className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don’t have an account?{' '}
          <a href="/signup" className="text-decoration-none">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
