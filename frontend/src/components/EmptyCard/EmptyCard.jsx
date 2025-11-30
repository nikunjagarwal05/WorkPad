import React from "react";

const EmptyCard = ({ imgSrc, message }) => {
    return(
        <div className="flex flex-col justify-center items-center mt-12 sm:mt-20 px-4">
            <img src={imgSrc} alt="No notes" className="w-48 sm:w-60" />
            <p className="w-full sm:w-2/3 md:w-1/2 text-sm sm:text-base font-medium text-[#8B9A8B] dark:text-[#B0B0B0] text-center leading-7 mt-5">
                {message}
            </p>
        </div>
    );
}

export default EmptyCard;