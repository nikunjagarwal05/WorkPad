import React from "react";
import moment from "moment";
import { MdOutlinePushPin } from "react-icons/md"
import { MdCreate, MdDelete } from "react-icons/md";

const NoteCard = ({ title, date, content, tags, isPinned, onEdit, onDelete, onPinNote }) => {
    return(
        <div className="border border-[#E5DED5] dark:border-[#404040] rounded-lg p-4 bg-white dark:bg-[#2A2A2A] hover:shadow-xl transition-all ease-in-out hover:border-[#C97D60]">
            <div className="flex items-center justify-between mb-2">
                <div className="flex-1 min-w-0">
                    <h6 className="text-sm font-medium text-[#3A3A3A] dark:text-[#E5E5E5] truncate">{title}</h6>
                    <span className="text-xs text-[#8B9A8B] dark:text-[#B0B0B0]">{moment(date).format('Do MMM YYYY')}</span>
                </div>

                <MdOutlinePushPin  className={`icons-btn flex-shrink-0 ml-2 ${isPinned ? 'text-[#C97D60]' : 'text-[#8B9A8B] dark:text-[#808080]'}`} onClick={onPinNote}/>
            </div>
            <p className="text-xs text-[#8B9A8B] dark:text-[#B0B0B0] mt-2 line-clamp-2">{content?.slice(0,60)}</p>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#E5DED5] dark:border-[#404040]">
                <div className="text-xs text-[#8B9A8B] dark:text-[#B0B0B0] truncate flex-1">{tags.map((item) => ` #${item} `)}</div>

                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <MdCreate 
                        className="icons-btn hover:text-[#8B9A8B]"
                        onClick={onEdit}
                    />
                    <MdDelete
                        className="icons-btn hover:text-red-500"
                        onClick={onDelete}
                    />
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
