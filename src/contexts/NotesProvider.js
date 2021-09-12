import React, { useContext, useEffect, useState } from "react";

const NotesContext = React.createContext();
export const useNoteProvider = () => {
    return useContext(NotesContext);
};
export const AuthProvider = ({ children }) => {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem("notes") || "[]"))
        return () => {
            setNotes([])
        }
    }, []);

    const value = {
        notes,
    };
    return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
};
