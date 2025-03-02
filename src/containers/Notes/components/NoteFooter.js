import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from './Button'

export const NoteFooter = ({ note, deleteNote, updateNote }) => {
    const history = useHistory()
    return (
        <div className="w-full py-2 bg-white flex flex-row justify-end space-x-2 px-3">
            <Button onClick={() => {deleteNote(note.createdAt); history.push("/")}} type={"danger"}>Notu Sil</Button>
            <Button onClick={() => updateNote(note.createdAt, note.note, note.noteTitle)} >Notu Güncelle</Button>
        </div>
    )
}
