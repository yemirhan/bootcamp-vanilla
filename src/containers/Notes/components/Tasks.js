import React, { useState } from 'react'

export const Tasks = ({ setSelectedNote, notes }) => {

    const [search, setSearch] = useState("")

    return (
        <div className="w-96 bg-white h-screen flex flex-col border-r border-gray-100">
            <div className="w-full px-2 py-1 bg-white">
                <input type="search" className="w-full border-2 border-gray-200 rounded-lg" value={search} onChange={({ target: { value } }) => setSearch(value)} />

            </div>
            
            {notes.filter(note => note.noteTitle.includes(search)).map(note => <div onClick={() => setSelectedNote(note.createdAt)} className="w-full h-16 flex flex-col justify-center bg-white px-2 hover:bg-gray-100 relative group border-b">
                <b>{note.noteTitle}</b>
                <p>{note.note}</p>
                <div className="absolute right-0 opacity-0 group-hover:opacity-100">{">"}</div>
            </div>)}
        </div>
    )
}
