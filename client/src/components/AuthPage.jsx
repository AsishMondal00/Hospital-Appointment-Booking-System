import React, { useState } from 'react';
import './authpage.css';

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    console.log('Login Data:', loginData);
    alert('Login Successful');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    console.log('Register Data:', registerData);
    alert('Account Created Successfully');
  };

  return (
    <div className="auth-container">
      <div className="blur-circle-one"></div>
      <div className="blur-circle-two"></div>

      <div className="auth-card">
        <div className="toggle-buttons">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
          >
            Create Account
          </button>
        </div>

        {isLogin ? (
          <div key="login" className="auth-panel auth-panel-enter">
            <div>
              <h1 className="auth-title">Welcome Back</h1>
              <p className="auth-subtitle">
                Login to continue your journey
              </p>
            </div>

            <form onSubmit={handleLoginSubmit} className="auth-form">
              <div>
                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="Enter your email"
                  required
                  className="auth-input"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>

                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Enter your password"
                  required
                  className="auth-input"
                />
              </div>

              <button
                type="submit"
                className="auth-button"
              >
                Login
              </button>
            </form>
          </div>
        ) : (
          <div key="register" className="auth-panel auth-panel-enter">
            <div>
              <h1 className="auth-title">Create Account</h1>
              <p className="auth-subtitle">
                Register your account
              </p>
            </div>

            <form onSubmit={handleRegisterSubmit} className="auth-form">
              <div className="input-row">
                <input
                  type="text"
                  name="firstName"
                  value={registerData.firstName}
                  onChange={handleRegisterChange}
                  placeholder="First Name"
                  required
                  className="auth-input"
                />

                <input
                  type="text"
                  name="lastName"
                  value={registerData.lastName}
                  onChange={handleRegisterChange}
                  placeholder="Last Name"
                  required
                  className="auth-input"
                />
              </div>

              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                placeholder="Email Address"
                required
                className="auth-input"
              />

              <input
                type="tel"
                name="phone"
                value={registerData.phone}
                onChange={handleRegisterChange}
                placeholder="Phone Number"
                required
                className="auth-input"
              />

              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Password"
                required
                className="auth-input"
              />

              <input
                type="password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                placeholder="Confirm Password"
                required
                className="auth-input"
              />

              <button
                type="submit"
                className="auth-button"
              >
                Create Account
              </button>
            </form>
          </div>
        )}

        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">OR CONTINUE WITH</span>
          <div className="divider-line"></div>
        </div>

        <div>
          <button className="google-btn">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="google-icon"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
