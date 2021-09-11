import React from 'react'
import { useHistory } from 'react-router-dom'

export const Note = ({ setSelectedNote, note, selectedNote }) => {
    const history = useHistory()
    console.log(note);
    return (
        <div onClick={() => history.replace(`/note/${note.createdAt}`)} className={`w-full h-16 flex transition-all flex-col justify-center px-2 ${note.createdAt === selectedNote?.createdAt ? "bg-gray-200" : "bg-white hover:bg-gray-100"}  relative group border-b`}>
            <b>{note.noteTitle}</b>
            <p>{note.note}</p>
            <div className="absolute right-5 opacity-0 group-hover:opacity-40 transition-all font-semibold text-xl">{">"}</div>
        </div>
    )
}
