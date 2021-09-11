import React, { useState } from 'react'
import { Note } from './Note'

export const Tasks = ({ setSelectedNote, notes, selectedNote }) => {

    const [search, setSearch] = useState("")

    return (
        <div className="w-96 bg-white h-screen flex flex-col border-r border-gray-100">
            <div className="w-full px-2 py-1 bg-white">
                <input type="search" className="w-full border-2 border-gray-200 rounded-lg" value={search} onChange={({ target: { value } }) => setSearch(value)} />

            </div>

            {notes.filter(note => note.noteTitle.includes(search)).map(note => <Note key={note.createdAt} selectedNote={selectedNote} setSelectedNote={setSelectedNote} note={note} />)}
        </div>
    )
}
