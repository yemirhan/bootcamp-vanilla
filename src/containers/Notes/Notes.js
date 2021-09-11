import React, { useState } from 'react'
import { useNote } from '../../hooks/useNote'
import { Edit } from './components/Edit'
import { SideMenu } from './components/SideMenu'
import { Tasks } from './components/Tasks'

export const Notes = () => {
    const $note = useNote()

    return (
        <div className="flex flex-row h-full">
            <SideMenu createNote={$note.createNote} />
            <Tasks selectedNote={$note.selectedNote} setSelectedNote={$note.setSelectedNote} notes={$note.notes} />
            <Edit selectedNote={$note.selectedNote} notes={$note.notes} setSelectedNote={$note.setSelectedNote} updateNote={$note.updateNote} deleteNote={$note.deleteNote} />
        </div>
    )
}
