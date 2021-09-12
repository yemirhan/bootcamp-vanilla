import React, { useState } from 'react'
import { useNoteProvider } from '../../../contexts/NotesProvider'
import { NotePreview } from '../components/NotePreview'
import { NoteSearch } from '../components/NoteSearch'

export const Tasks = () => {
    const { notes, selectedNote, setSelectedNote } = useNoteProvider()
    const [search, setSearch] = useState("")

    return (
        <div className="w-96 bg-white h-screen flex flex-col border-r border-gray-100">
            <NoteSearch search={search} setSearch={setSearch} />
            {notes
                .filter(note => note.noteTitle.includes(search))
                .sort(e => 0 - e.createdAt)
                .map(note => (
                    <NotePreview
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
