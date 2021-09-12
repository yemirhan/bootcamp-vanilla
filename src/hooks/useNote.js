import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const useNote = () => {
    const [notes, setNotes] = useState([])
    const [selectedNote, setSelectedNote] = useState(null)
    const history = useHistory()
    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem("notes") || "[]"))
        return () => {
            setNotes([])
        }
    }, [])

    const saveNoteToStorage = (n) => {
        localStorage.setItem("notes", JSON.stringify(n))
    }
    const updateNote = (createdAt, note, title) => {
        console.log(createdAt, note, title);
        if (title === "") { alert("Task adı mevcut değil!"); return null }
        const _notes = [...notes]
        _notes.splice(notes.findIndex(e => e.createdAt === createdAt), 1, { createdAt, note, noteTitle: title })
        setNotes(_notes)
        setNotes(() => { saveNoteToStorage([..._notes]); return [..._notes] })
    }
    const createNote = () => {
        if (notes.filter(n => n.noteTitle === "").length > 0) { alert("Boş olan bir task mevcut!"); return null }
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
