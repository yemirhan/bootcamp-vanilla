import React, { useEffect, useState } from 'react'

export const useNote = () => {
    const [notes, setNotes] = useState([])
    const [selectedNote, setSelectedNote] = useState(null)
    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem("notes") || "[]"))
        return () => {
            setNotes()
        }
    }, [])
    const saveNoteToStorage = (n) => {
        localStorage.setItem("notes", JSON.stringify(n))
    }
    const updateNote = (createdAt, note, title) => {
        const _notes = [...notes]
        _notes.splice(notes.findIndex(e => e.createdAt === createdAt), 1, { createdAt, note, noteTitle: title })
        setNotes(() => { saveNoteToStorage([..._notes]); return [..._notes] })
    }
    const createNote = () => {
        const cAt = Date.now()
        setNotes(noteList => {
            saveNoteToStorage([...noteList, { noteTitle: "", note: "", createdAt: cAt }]);
            return [...noteList, { noteTitle: "", note: "", createdAt: cAt }]
        })
        setSelectedNote({ noteTitle: "", note: "", createdAt: cAt })
    }
    const deleteNote = (createdAt) => {
        setSelectedNote(null)
        setNotes(n => {
            saveNoteToStorage([...n.filter(d => d.createdAt !== createdAt)]);
            return [...n.filter(d => d.createdAt !== createdAt)]
        })

    }
    return {
        notes,
        createNote,
        deleteNote,
        updateNote,
        selectedNote,
        setSelectedNote

    }
}
