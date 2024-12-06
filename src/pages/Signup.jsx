import React from "react";
import "./Signup.css"; // Import the CSS file

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Signup</h1>
        <form>
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>
        <p className="login-text">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
