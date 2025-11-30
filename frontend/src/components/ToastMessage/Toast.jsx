import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Toast = ({ isShown, message, type, onClose }) => {
    useEffect(() => {
        const timeoutId = setTimeout(() =>{
            onClose();
        }, 3000);
        
        return() => {
            clearTimeout(timeoutId);
        };
    }, [onClose]);

    return(
        <div className={`absolute top-20 right-6 transition-all duration-400 ${
                isShown ? "opacity-100" : "opacity-0"
        }`}>
            <div 
                className={`min-w-52 bg-white dark:bg-[#2A2A2A] border border-[#E5DED5] dark:border-[#404040] shadow-2xl rounded-md after:w-[5px] after:h-full ${
                    type === 'delete' ? 'after:bg-red-500' : 'after:bg-green-500'
                } after:absolute after:left-0 after:top-0 after:rounded-l-lg transition-colors`}
            >
                <div className="flex items-center gap-3 py-2 px-4">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                        type === 'delete' ? 'bg-red-50 dark:bg-red-900/30': 'bg-green-50 dark:bg-green-900/30'
                    }`}>
                        {type === 'delete' ? (
                            <MdDeleteOutline className="text-xl text-red-500" />
                        ) : (
                            <LuCheck className="text-xl text-green-500" />
                        )}
                    </div>

                    <p className="text-sm text-[#3A3A3A] dark:text-[#E5E5E5]">{message}</p>
                </div>
            </div>
        </div>
    );
}

export default Toast;