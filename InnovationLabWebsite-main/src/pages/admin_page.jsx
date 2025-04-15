import React, { useState } from "react";
import "../styles/admin-page.css";

const AdminDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="admin-dashboard">
      {/* Top Bar */}
      <header className="top-bar">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <div
          className="profile-section"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="profile-icon">
            <img
              src="./assets/images/person.jpg"
              alt="Admin Profile"
              className="profile-image"
            />
            <span className={`arrow-icon ${isDropdownOpen ? "rotate" : ""}`}>
              ▼
            </span>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <p className="admin-email">admin@example.com</p>
              <button className="dropdown-item">Change Password</button>
            </div>
          )}
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="dashboard-content">
        <div className="card">
          <h2>Post Important Message</h2>
          <p>Post an important message that will appear on the home page.</p>
          <button className="card-button">Post Message</button>
        </div>
        <div className="card">
          <h2>Update/Add News</h2>
          <p>Add or update news for the website's news section.</p>
          <button className="card-button">Update News</button>
        </div>
        <div className="card">
          <h2>Manage Users</h2>
          <p>View, add, or manage user accounts for the website.</p>
          <button className="card-button">Manage Users</button>
        </div>
        <div className="card">
          <h2>Analytics</h2>
          <p>View website traffic and user engagement analytics.</p>
          <button className="card-button">View Analytics</button>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;