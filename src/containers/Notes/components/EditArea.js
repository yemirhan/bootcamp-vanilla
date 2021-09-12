import React, { useEffect, useState } from 'react'
import { useNote } from '../../../hooks/useNote'
import { NoteArea } from './NoteArea'
import { NoteFooter } from './NoteFooter'
import { TitleBar } from './TitleBar'

export const EditArea = ({ match: { params: { id } } }) => {
    
    const [note, setNote] = useState({})
    const $note = useNote()
    useEffect(() => {
        const selectedNote = $note.notes.find(n => n.createdAt === parseInt(id))
        setNote(selectedNote ? selectedNote : {})
        return () => {
            setNote({})
        }
    }, [$note.notes, id])
    console.log(note);
    if (!note?.createdAt) return <div className="w-full h-screen bg-white flex items-center justify-center">Sol taraftan bir not seçiniz.</div>
    return (
        <div className="w-full h-screen bg-gray-700 flex flex-col">
            <TitleBar setSelectedNote={$note.setSelectedNote} note={note} setNote={setNote} />
            <NoteArea note={note} setNote={setNote} />
            <NoteFooter note={note} deleteNote={$note.deleteNote} updateNote={$note.updateNote} />
        </div>
    )
}
