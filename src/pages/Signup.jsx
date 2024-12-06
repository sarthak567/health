import React from "react";

const Signup = () => {
  return (
    <div className="signup">
      <h1>Signup</h1>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
