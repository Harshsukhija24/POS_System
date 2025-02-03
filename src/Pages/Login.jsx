// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const hardcodedEmail = "admin@gmail.com";
    const hardcodedPassword = "admin123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      // Redirect to the admin page if login is successful
      navigate("/adminPage");
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-md"
        />
        <button
          onClick={handleLogin}
          className="w-full p-3 bg-blue-600 text-white rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
