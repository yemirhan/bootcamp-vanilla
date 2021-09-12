import React, { useEffect, useState } from 'react'
import { useNoteProvider } from '../../../contexts/NotesProvider'
import { NoteArea } from './NoteArea'
import { NoteFooter } from './NoteFooter'
import { TitleBar } from './TitleBar'

export const EditArea = ({ match: { params: { id } } }) => {

    const [note, setNote] = useState({})
    const { notes, setSelectedNote, deleteNote, updateNote } = useNoteProvider()
    useEffect(() => {
        const selectedNote = notes.find(n => n.createdAt === parseInt(id))
        setNote(selectedNote ? selectedNote : {})
        return () => {
            setNote({})
        }
    }, [notes, id])
    if (!note?.createdAt) return <div className="w-full h-screen bg-white flex items-center justify-center">Bu not mevcut değil :(</div>
    return (
        <div className="w-full h-screen bg-gray-700 flex flex-col">
            <TitleBar setSelectedNote={setSelectedNote} note={note} setNote={setNote} />
            <NoteArea note={note} setNote={setNote} />
            <NoteFooter note={note} deleteNote={deleteNote} updateNote={updateNote} />
        </div>
    )
}
