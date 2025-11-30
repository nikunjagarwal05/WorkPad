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
        <div className="flex justify-between items-center px-6 py-2 drop-shadow bg-white">
            <h2 className="text-2xl font-medium text-black py-2">WorkPad</h2>

            <SearchBar 
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value);
                }}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
            />

            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>
    );
}

export default Navbar