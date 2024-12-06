import React from "react";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
