import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "./../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "./../../utils/axiosInstance";
import bgImg from "../../assets/images/background.png"; // the extracted bg image (book + pen + stickies)

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }
    setError("");

    try {
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Login Card */}
      <div className="bg-[#fff7ec]/95 absolute right-80 rounded-2xl shadow-xl w-[380px] p-8 backdrop-blur-sm border border-orange-100">
        <h1 className="text-4xl font-bold text-center text-[#2f2f2f] mb-2">
          Note
        </h1>
        <p className="text-center text-gray-700 mb-6">Welcome back!</p>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none bg-[#fff7ec]"
          />

          {/* Password */}
          <div className="relative">
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none bg-[#fff7ec]"
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-xs">{error}</p>}

          {/* Login button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold shadow-md hover:from-orange-500 hover:to-orange-600 transition-all"
          >
            Log In
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-sm mt-6 text-gray-700">
          New here?{" "}
          <Link to="/signup" className="text-orange-500 underline">
            Create an account
          </Link>
        </p>
      </div>

      {/* Bottom tagline */}
      <div className="absolute bottom-8 text-center w-full">
        <p className="text-gray-800 font-medium text-lg">
          Organize thoughts. Capture ideas. Remember everything.
        </p>
      </div>
    </div>
  );
};

export default Login;
