import React, { useEffect, useState } from 'react'

export const useNote = () => {
    const [notes, setNotes] = useState([])
    const [selectedNote, setSelectedNote] = useState(null)
    useEffect(() => {
        setNotes([{
            noteTitle: "Test note",
            note: "Bu bir not",
            createdAt: 194209
        },
        {
            noteTitle: "Test note2",
            note: "Bu bir not iki",
            createdAt: 8723945234
        }])
        return () => {
            setNotes()
        }
    }, [])
    const updateNote = (createdAt, note, title) => {
        const _notes = [...notes]
        _notes.splice(notes.findIndex(e => e.createdAt === createdAt), 1, { createdAt, note, noteTitle: title })
        setNotes([..._notes])
    }
    const createNote = () => {
        const cAt = Date.now()
        setNotes(noteList => ([...noteList, { noteTitle: "", note: "", createdAt: cAt }]))
        setSelectedNote(cAt)
    }
    const deleteNote = (createdAt) => {
        setSelectedNote(null)
        setNotes(n => [...n.filter(d => d.createdAt !== createdAt)])

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
