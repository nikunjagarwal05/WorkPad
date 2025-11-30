import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md"
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from './../../utils/axiosInstance';
import Toast from "../../components/ToastMessage/Toast";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import AddNotesImg from "../../assets/images/add2.png";
import NoDataImg from "../../assets/images/no-data.png";

const Home = () => {
    const [ openAddEditModal, setOpenAddEditModal ] = useState({
        isShown: false,
        type: "add",
        data: "null",
    });

    const [showToastMsg, setShowToastMsg] = useState({
        isShown: false,
        message: "",
        type: "add",
    });

    const [allNotes, setAllNotes] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [ isSearch, setIsSearch ] = useState(false);
    const navigate = useNavigate();

    const handleEdit = (noteDetails) => {
        setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
    };

    const showToastMessage = (message, type) => {
        setShowToastMsg({
            isShown: true,
            message,
            type,
        });
    };

    const handleCloseToast = () => {
        setShowToastMsg({
            isShown: false,
            message: "", 
        });
    };

    // Get user info
    const getUserInfo = async () => {
        try{
            const response = await axiosInstance.get("/get-user");
            if (response.data && response.data.user) {
                setUserInfo(response.data.user);
            }
        } catch (error){
            if (error.response.status === 401) {
                localStorage.clear();
                navigate('/login');
            }
        }
    };

    // Get all notes
    const getAllNotes = async () => {
        try{
            const response = await axiosInstance.get('/get-all-notes');

            if (response.data && response.data.notes) {
                setAllNotes(response.data.notes);
            }
        } catch (error) {
            console.log("An unexpected error occurred. Please try again.")
        }
    }

    // Delete Note
    const deleteNote = async (data) => {
        const noteId = data._id

        try {
            const response = await axiosInstance.delete("/delete-note/" + noteId);

            if (response.data && !response.data.error) {
                showToastMessage("Note Deleted Successfully", 'delete');
                getAllNotes();
            }
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
               console.log("An unexpected error occurred. Please try again.")
            }
        }
    }

    // Search for a Note
    const onSearchNote = async (query) => {
        try {
            const response = await axiosInstance.get("/search-notes", {
                params: { query },
            });

            if (response.data && response.data.notes) {
                setIsSearch(true);
                setAllNotes(response.data.notes);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Update pinned Note
    const updateisPinned = async (noteData) => {
        const noteId = noteData._id;

        try{
            const response = await axiosInstance.put(
                "/update-note-pinned/" + noteId, 
                {
                "isPinned": !noteData.isPinned,
                }
            );

            if (response.data && response.data.note) {
                showToastMessage("Note Pin Status Updated");
                getAllNotes();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleClearSearch = () => {
        setIsSearch(false);
        getAllNotes();
    };

    useEffect(() => {
        getAllNotes()
        getUserInfo();
        return() => {};
    }, []);

    return(
        <div className="min-h-screen bg-[#FAF7F2] dark:bg-[#1A1A1A] transition-colors">
            <Navbar 
                userInfo={userInfo} 
                onSearchNote={onSearchNote} 
                handleClearSearch={handleClearSearch} 
            />

            <div className="container mx-auto px-4 sm:px-6">
                {allNotes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                        {allNotes.map((item, index) => (
                            <NoteCard 
                                key={item._id}
                                title={item.title}
                                date={item.createdOn}
                                content={item.content} 
                                tags={item.tags}
                                isPinned={item.isPinned}
                                onEdit={() => handleEdit(item)}
                                onDelete={() => {deleteNote(item)}}
                                onPinNote={() => {updateisPinned(item)}}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyCard 
                        imgSrc={isSearch ? NoDataImg : AddNotesImg} 
                        message={
                            isSearch 
                            ? `Oops! No notes found matching your search.` 
                            : `Start creating your first note! Click the 'Add' button to jot down your
                             thoughts, ideas and reminders. Let's get Started!`
                        }
                    />
                )}
            </div>

            <button 
                className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-[#C97D60] hover:bg-[#B86A4F] absolute right-4 sm:right-10 bottom-4 sm:bottom-10 shadow-lg transition-all z-10" 
                onClick={() => {
                    setOpenAddEditModal({ isShown: true, type: "add", data: null });
                }}
            >
                <MdAdd className="text-[28px] sm:text-[32px] text-white"/>
            </button>

            <Modal 
                isOpen={openAddEditModal.isShown}
                onRequestClose={() => {}}
                style={{
                    overlay: {
                        backgroundColor: "rgba(58, 58, 58, 0.5)",
                    },
                }}
                contentLabel=""
                className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] max-h-[90vh] bg-white dark:bg-[#2A2A2A] rounded-lg mx-auto mt-8 sm:mt-14 p-4 sm:p-5 sm:p-6 overflow-scroll border border-[#E5DED5] dark:border-[#404040] transition-colors"
            >
                <AddEditNotes 
                    type={openAddEditModal.type}
                    noteData={openAddEditModal.data}
                    onClose={() => {
                        setOpenAddEditModal({ isShown: false, type: "add", data: null });
                    }} 
                    getAllNotes={getAllNotes}
                    showToastMessage={showToastMessage}
                />
            </Modal>

            <Toast 
                isShown={showToastMsg.isShown}
                message={showToastMsg.message}
                type={showToastMsg.type}
                onClose={handleCloseToast}
            />
        </div>
    );
}

export default Home;