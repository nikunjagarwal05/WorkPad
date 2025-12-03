import React, { useState, useRef, useEffect } from "react";
import { getInitials } from "../../utils/helper";
import { MdLogout } from "react-icons/md";

const ProfileInfo = ({ userInfo, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return(
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-[#F5F1EB] dark:hover:bg-[#1A1A1A] transition-colors group"
            >
                <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-br from-[#C97D60] to-[#B86A4F] shadow-md group-hover:shadow-lg transition-all">
                    {getInitials(userInfo?.fullName)}
                </div>

                <div className="hidden sm:block text-left">
                    <p className="text-sm font-semibold text-[#3A3A3A] dark:text-[#E5E5E5] leading-tight">
                        {userInfo?.fullName}
                    </p>
                    <p className="text-xs text-[#8B9A8B] dark:text-[#B0B0B0] leading-tight">
                        Account
                    </p>
                </div>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 sm:w-56 bg-white dark:bg-[#2A2A2A] rounded-xl shadow-xl border border-[#E5DED5] dark:border-[#404040] overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-[#E5DED5] dark:border-[#404040]">
                        <div className="flex items-center gap-3">
                            <div>
                                <p className="text-sm font-semibold text-[#3A3A3A] dark:text-[#E5E5E5]">
                                    {userInfo?.fullName}
                                </p>
                                <p className="text-xs text-[#8B9A8B] dark:text-[#B0B0B0]">
                                    {userInfo?.email || 'User'}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="py-1">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                onLogout();
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-[#3A3A3A] dark:text-[#E5E5E5] hover:bg-[#F5F1EB] dark:hover:bg-[#1A1A1A] transition-colors"
                        >
                            <MdLogout className="text-lg text-[#C97D60]" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileInfo;