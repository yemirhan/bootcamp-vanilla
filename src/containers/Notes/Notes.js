import React from 'react'
import { useNoteProvider } from '../../contexts/NotesProvider'
import { useNote } from '../../hooks/useNote'
import { Edit } from './components/Edit'
import { SideMenu } from './components/SideMenu'
import { Tasks } from './components/Tasks'

export const Notes = () => {
    const { createNote, selectedNote, notes, setSelectedNote, updateNote, deleteNote } = useNoteProvider()


    return (
        <div className="flex flex-row h-full">
            <SideMenu createNote={createNote} />
            <Tasks selectedNote={selectedNote} setSelectedNote={setSelectedNote} notes={notes} />
            <Edit />
        </div>
    )
}
