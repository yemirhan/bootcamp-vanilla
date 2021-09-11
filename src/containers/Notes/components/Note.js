import React from 'react'

export const Note = ({ setSelectedNote, note, selectedNote }) => {
    return (
        <div onClick={() => setSelectedNote(note)} className={`w-full h-16 flex transition-all flex-col justify-center px-2 ${note.createdAt === selectedNote?.createdAt ? "bg-gray-200" : "bg-white hover:bg-gray-100"}  relative group border-b`}>
            <b>{note.noteTitle}</b>
            <p>{note.note}</p>
            <div className="absolute right-5 opacity-0 group-hover:opacity-40 transition-all font-semibold text-xl">{">"}</div>
        </div>
    )
}
