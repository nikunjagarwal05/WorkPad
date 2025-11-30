import React, { useState } from "react";
import TagInput from "../../components/Input/TagInput";
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";

const AddEditNotes = ({ noteData, type, getAllNotes, onClose, showToastMessage }) => {
    const [ title, setTitle ] = useState(noteData?.title || "");
    const [ content, setContent ] = useState(noteData?.content || "");
    const [ tags, setTags ] = useState(noteData?.tags || []);

    const [ error, setError ] = useState(null);

    // Add note 
    const addNewNote = async () => {
        try {
            const response = await axiosInstance.post("/add-note", {
                title,
                content, 
                tags,
            });

            if (response.data && response.data.note) {
                showToastMessage("Note Added Successfully");
                getAllNotes();
                onClose();
            }
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setError(error.response.data.message);
            }
        }
    };

    // Edit note
    const editNote = async () => {
        const noteId = noteData._id
        try {
            const response = await axiosInstance.put("/edit-note/" + noteId, {
                title,
                content, 
                tags,
            });

            if (response.data && response.data.note) {
                showToastMessage("Note Updated Successfully")
                getAllNotes();
                onClose();
            }
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setError(error.response.data.message);
            }
        }
    };

    const handleAddNote = () => {
        if (!title) {
            setError("Please enter the title");
            return;
        }
        if (!content) {
            setError("Please enter the content");
            return
        }
        setError("");
        
        if(type === 'edit'){
            editNote()
        }else{
            addNewNote()
        }
    }

    return(
        <div className="relative">
            <button className="w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-[#F5F1EB] transition-colors" onClick={onClose}>
                <MdClose className="text-xl text-[#8B9A8B] hover:text-[#C97D60] cursor-pointer transition-colors" />
            </button>

            <div className="flex flex-col gap-2">
                <label className="input-label">TITLE</label>
                <input 
                    type="text"
                    className="text-xl sm:text-2xl text-[#3A3A3A] dark:text-[#E5E5E5] outline-none bg-transparent border-b border-[#E5DED5] dark:border-[#404040] focus:border-[#C97D60] pb-2 transition-colors"
                    placeholder="Go to gym at 6" 
                    value={title}
                    onChange={({ target }) => setTitle(target.value)}
                />

                <div className="flex flex-col gap-2 mt-4">
                    <label className="input-label">CONTENT</label>
                    <textarea 
                        type="text"
                        className="text-sm text-[#3A3A3A] dark:text-[#E5E5E5] outline-none bg-[#F5F1EB] dark:bg-[#1A1A1A] p-3 rounded-lg border border-[#E5DED5] dark:border-[#404040] focus:ring-2 focus:ring-[#C97D60] focus:border-[#C97D60] transition-all resize-none"
                        placeholder="Content"
                        rows={10}
                        value={content}
                        onChange={({ target }) => setContent(target.value)}
                    />
                </div>

                <div className="mt-3">
                    <label className="input-label">TAGS</label>
                    <TagInput tags={tags} setTags={setTags} />
                </div>

                {error && 
                    <p className="text-red-500 text-xs pt-4">
                        {error}
                    </p>
                }

                <button 
                    className="btn-primary font-medium mt-5 p-3" 
                    onClick={handleAddNote}
                >
                    {type === 'edit' ? 'UPDATE' : 'ADD'}
                </button>
            </div>
        </div>
    );
}

export default AddEditNotes;