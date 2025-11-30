import React, { useState } from "react";
import ProfileInfo from './../Cards/ProfileInfo.jsx';
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar.jsx";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("")

    const onLogout = () => {
        localStorage.clear()
        navigate("/login");
    }
    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery)
        }
    };

    const onClearSearch = () => {
        setSearchQuery("");
        handleClearSearch();
    };

    return(
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 px-4 sm:px-6 py-3 sm:py-2 drop-shadow bg-white dark:bg-[#2A2A2A] border-b border-[#E5DED5] dark:border-[#404040] transition-colors relative">
            <h2 className="text-xl sm:text-2xl font-medium text-[#3A3A3A] dark:text-[#E5E5E5] py-2">WorkPad</h2>

            <div className="w-full sm:w-auto flex-1 sm:flex-none">
                <SearchBar 
                    value={searchQuery}
                    onChange={({ target }) => {
                        setSearchQuery(target.value);
                    }}
                    handleSearch={handleSearch}
                    onClearSearch={onClearSearch}
                />
            </div>

            <div className="flex items-center gap-3 sm:gap-4 pr-12 sm:pr-16">
                <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
            </div>
        </div>
    );
}

export default Navbar