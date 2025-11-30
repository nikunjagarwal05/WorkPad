import React, { useState } from "react";
import PasswordInput from './../../components/Input/PasswordInput';
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if(!name){
            setError("Please enter your name.")
            return;
        }

        if(!validateEmail(email)) {
            setError("Please enter valid email address.")
            return;
        }
        
        if(!password) {
            setError("Please enter a Password")
            return;
        }
        
        setError("")

        // Sign Up API calling
        try {
            const response = await axiosInstance.post("/create-account", {
                fullName: name,
                email: email,
                password: password,
            });

            // Handle successful registration response 
            if (response.data && response.data.error) {
                setError(response.data.message)
                return
            }
            if (response.data && response.data.accessToken) {
                localStorage.setItem("token", response.data.accessToken)
                navigate("/dashboard", { replace: true })
            }
        } catch (error) {
            // Handle Sign Up error
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="w-full h-screen flex">
            {/* Left Panel - Animated Background */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-[#2D1B1B] via-[#3A2A2A] to-[#4A3A3A]">
                {/* Animated Blobs */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-[#C97D60] rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob"></div>
                    <div className="absolute top-40 right-20 w-72 h-72 bg-[#8B9A8B] rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-20 left-40 w-72 h-72 bg-[#E8B4A0] rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-4000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center items-start px-8 md:px-12 text-white">
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Join <span className="text-[#E8B4A0]">WorkPad</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-md">
                            Create your account to start taking notes, organizing your thoughts, and capturing your ideas.
                        </p>
                    </div>
                    <div className="mt-8">
                        <p className="text-gray-400 text-sm">
                            Organize thoughts. Capture ideas. Remember everything.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Panel - Sign Up Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-[#FAF7F2] dark:bg-[#1A1A1A] px-4 sm:px-6 py-8 sm:py-12 transition-colors">
                <div className="w-full max-w-md">
                    <div className="bg-white dark:bg-[#2A2A2A] rounded-2xl shadow-xl p-6 sm:p-8 border border-[#E5DED5] dark:border-[#404040] transition-colors">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#3A3A3A] dark:text-[#E5E5E5] mb-2">
                                Create Account
                            </h2>
                            <p className="text-[#8B9A8B] dark:text-[#B0B0B0] text-sm">
                                Sign up to start using WorkPad
                            </p>
                        </div>

                        <form onSubmit={handleSignUp} className="space-y-5">
                            {/* Name */}
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-[#E5DED5] dark:border-[#404040] focus:ring-2 focus:ring-[#C97D60] focus:border-[#C97D60] focus:outline-none transition-all bg-[#FAF7F2] dark:bg-[#1A1A1A] text-[#3A3A3A] dark:text-[#E5E5E5] placeholder:text-[#8B9A8B] dark:placeholder:text-[#808080]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-[#E5DED5] dark:border-[#404040] focus:ring-2 focus:ring-[#C97D60] focus:border-[#C97D60] focus:outline-none transition-all bg-[#FAF7F2] dark:bg-[#1A1A1A] text-[#3A3A3A] dark:text-[#E5E5E5] placeholder:text-[#8B9A8B] dark:placeholder:text-[#808080]"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <PasswordInput 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>

                            {/* Error */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg">
                                    {error}
                                </div>
                            )}

                            {/* Sign Up button */}
                            <button 
                                type="submit" 
                                className="w-full py-3 rounded-lg bg-[#C97D60] text-white font-semibold shadow-md hover:bg-[#B86A4F] transition-all transform hover:scale-[1.02]"
                            >
                                Create Account
                            </button>
                        </form>

                        {/* Footer link */}
                        <p className="text-center text-sm mt-6 text-[#8B9A8B] dark:text-[#B0B0B0]">
                            Already have an account?{" "}
                            <Link to="/login" className="text-[#C97D60] font-semibold hover:text-[#B86A4F] underline">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile Background - Show on small screens */}
            <div className="lg:hidden absolute inset-0 -z-10 bg-gradient-to-br from-[#2D1B1B] via-[#3A2A2A] to-[#4A3A3A] opacity-10 dark:opacity-20"></div>
        </div>
    );
}

export default SignUp;