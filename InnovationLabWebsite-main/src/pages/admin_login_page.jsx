import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin-login-page.css";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      setErrorMessage("Login Successful!");
      setTimeout(() => {
      navigate("/admin_page", { state: { message: null } });
    }, 2000); 
    } else {
      setErrorMessage("Only admin can log in.");
      setTimeout(() => {
        navigate("/", { state: { message: null } }); // Redirect to home after showing the error
      }, 1000); // 2-second delay before redirect
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default AdminLoginPage;
