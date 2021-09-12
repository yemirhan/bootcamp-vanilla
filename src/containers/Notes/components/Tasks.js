import React, { useEffect, useState } from 'react'
import { Note } from './Note'
import { NoteSearch } from './NoteSearch'

export const Tasks = ({ setSelectedNote, notes, selectedNote }) => {
    const [search, setSearch] = useState("")
    const [noteList, setNoteList] = useState([])
    useEffect(() => {
        setNoteList(notes || [])
    }, [notes])
    console.log(notes);
    return (
        <div className="w-96 bg-white h-screen flex flex-col border-r border-gray-100">
            <NoteSearch search={search} setSearch={setSearch} />
            {noteList
                .filter(note => note.noteTitle.includes(search))
                .sort(e => 0 - e.createdAt)
                .map(note => (
                    <Note
                        key={note.createdAt}
                        selectedNote={selectedNote}
                        setSelectedNote={setSelectedNote}
                        note={note}
                    />
                )
                )
            }
        </div>
    )
}
