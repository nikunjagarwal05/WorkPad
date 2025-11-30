import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
    return(
        <div className="w-full sm:w-80 flex items-center px-3 sm:px-4 bg-[#F5F1EB] dark:bg-[#1A1A1A] rounded-lg border border-[#E5DED5] dark:border-[#404040] focus-within:border-[#C97D60] focus-within:ring-2 focus-within:ring-[#C97D60] transition-all">
            <input 
                type="text" 
                placeholder="Search Notes"
                className="w-full text-xs sm:text-sm bg-transparent py-2 sm:py-[11px] outline-none text-[#3A3A3A] dark:text-[#E5E5E5] placeholder:text-[#8B9A8B] dark:placeholder:text-[#808080]"
                value={value}
                onChange={onChange}
            />
            
            {value && (
                <IoMdClose 
                    className="text-lg sm:text-xl text-[#8B9A8B] cursor-pointer hover:text-[#C97D60] mr-2 sm:mr-3 transition-colors" 
                    onClick={onClearSearch} 
                />
            )}

            <FaMagnifyingGlass className="text-[#8B9A8B] cursor-pointer hover:text-[#C97D60] transition-colors" onClick={handleSearch} />
        </div>
    );
}

export default SearchBar