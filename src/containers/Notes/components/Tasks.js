import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNoteProvider } from '../../../contexts/NotesProvider'
import { Note } from './Note'
import { NoteSearch } from './NoteSearch'

export const Tasks = ({ setSelectedNote, selectedNote }) => {
    const [search, setSearch] = useState("")
    const { notes } = useNoteProvider()

    return (
        <div className="w-96 bg-white h-screen flex flex-col border-r border-gray-100">
            <NoteSearch search={search} setSearch={setSearch} />
            {notes
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
