import React from 'react'
import { useNote } from '../../hooks/useNote'
import { ViewPanel } from './modules/ViewPanel'
import { SideMenu } from './modules/SideMenu'
import { Tasks } from './modules/Tasks'

export const Notes = () => {
    const $note = useNote()

    return (
        <div className="flex flex-row h-full">
            <SideMenu createNote={$note.createNote} />
            <Tasks selectedNote={$note.selectedNote} setSelectedNote={$note.setSelectedNote} notes={$note.notes} />
            <ViewPanel selectedNote={$note.selectedNote} notes={$note.notes} setSelectedNote={$note.setSelectedNote} updateNote={$note.updateNote} deleteNote={$note.deleteNote} />
        </div>
    )
}
