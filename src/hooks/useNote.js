import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { $delete_note, $get_notes, $select_note, $update_note } from '../redux/notes.reducer'

export const useNote = () => {
    const [selectedNote, setSelectedNote] = useState(null)
    const dispatch = useDispatch()
    const $notes = useSelector(state => state.$notes)
    useEffect(() => {
        if (!$notes.appInitialized) dispatch($get_notes(JSON.parse(localStorage.getItem("notes") || "[]")))
        return () => {
            dispatch($get_notes([]))
        }
    }, [$notes.appInitialized])
    const saveNoteToStorage = (n) => {
        localStorage.setItem("notes", JSON.stringify(n))
    }
    const updateNote = (createdAt, note, title) => {
        if (title === "") { alert("Task adı mevcut değil!"); return null }
        const _notes = [...$notes.notes]
        _notes.splice($notes.notes.findIndex(e => e.createdAt === createdAt), 1, { createdAt, note, noteTitle: title })
        dispatch($update_note([..._notes]))
    }
    const createNote = () => {
        if ($notes.notes.filter(n => n.noteTitle === "").length > 0) { alert("Boş olan bir task mevcut!"); return null }
        const cAt = Date.now()
        dispatch($update_note([...$notes.notes, { noteTitle: "", note: "", createdAt: cAt }]))
        setSelectedNote({ noteTitle: "", note: "", createdAt: cAt })
    }
    const deleteNote = (createdAt) => {
        setSelectedNote(null)

        dispatch($delete_note([...$notes.notes.filter(d => d.createdAt !== createdAt)]))

    }
    return {
        notes: $notes.notes,
        createNote,
        deleteNote,
        updateNote,
        selectedNote: $notes.selectedNote,
        setSelectedNote: (n) => dispatch($select_note(n))

    }
}
