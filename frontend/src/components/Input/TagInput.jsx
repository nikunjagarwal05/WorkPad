import React, { useState } from "react";
import { MdAdd, MdClose } from 'react-icons/md';

const TagInput = ({ tags, setTags }) => {
    const [ inputValue, setInputValue ] = useState("");

    const handleInputChage = (e) => {
        setInputValue(e.target.value);
    }
    const addNewTag = () => {
        if(inputValue.trim() != ""){
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter"){
            addNewTag();
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    }

    return(
        <div>
            {tags?.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap mt-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="flex items-center gap-2 text-sm text-[#3A3A3A] dark:text-[#E5E5E5] bg-[#F5F1EB] dark:bg-[#1A1A1A] px-3 py-1 rounded-lg border border-[#E5DED5] dark:border-[#404040]">
                            # {tag}
                            <button 
                                onClick={() => {
                                    handleRemoveTag(tag)
                                }}>
                                <MdClose className="cursor-pointer text-[#8B9A8B] dark:text-[#B0B0B0] hover:text-[#C97D60] transition-colors"/>
                            </button>
                        </span>
                    ))}
                </div>
            )}

            <div className="flex items-center gap-3 mt-3">
                <input 
                    type="text" 
                    value={inputValue}
                    className="flex-1 text-sm bg-[#F5F1EB] dark:bg-[#1A1A1A] border border-[#E5DED5] dark:border-[#404040] px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#C97D60] focus:border-[#C97D60] text-[#3A3A3A] dark:text-[#E5E5E5] placeholder:text-[#8B9A8B] dark:placeholder:text-[#808080] transition-all" 
                    placeholder="Add tags"
                    onChange={handleInputChage}
                    onKeyDown={handleKeyDown}
                />

                <button 
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#C97D60] bg-[#C97D60] hover:bg-[#B86A4F] transition-colors"
                    onClick={() => {
                        addNewTag();
                    }}
                >
                    <MdAdd className="text-xl text-white"/>
                </button>
            </div>
        </div>
    );
}

export default TagInput;