import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder, className }) => {
    const [ isShowPassword, setIsShowPassword ] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    return(
        <div className={`flex items-center border border-[#E5DED5] dark:border-[#404040] rounded-lg px-4 focus-within:ring-2 focus-within:ring-[#C97D60] focus-within:border-[#C97D60] transition-all bg-[#FAF7F2] dark:bg-[#1A1A1A] ${className || ''}`}>
            <input
                value={value}
                onChange={onChange}
                type={isShowPassword ? "text" : "password"}
                placeholder={placeholder || "Password"} 
                className="w-full text-sm bg-transparent py-3 outline-none text-[#3A3A3A] dark:text-[#E5E5E5] placeholder:text-[#8B9A8B] dark:placeholder:text-[#808080]"
            />

            {isShowPassword ? 
                (<FaRegEye 
                    size={20}
                    className="cursor-pointer text-[#8B9A8B] hover:text-[#C97D60] transition-colors"
                    onClick={() => toggleShowPassword()}
                />) : (<FaRegEyeSlash
                    size={20}
                    className="cursor-pointer text-[#8B9A8B] hover:text-[#C97D60] transition-colors"
                    onClick={() => toggleShowPassword()}
                />)
            }

        </div>
    );
}
export default PasswordInput