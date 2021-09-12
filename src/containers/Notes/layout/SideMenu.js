import React from 'react'
import { useNoteProvider } from '../../../contexts/NotesProvider'
import pencil from '../assets/Ei-pencil.svg'
export const SideMenu = () => {
    const { createNote } = useNoteProvider()
    return (
        <div className="w-20 h-screen bg-gray-200 py-2">
            <img src={pencil} alt="pencil" />
            <div onClick={createNote} className="w-full h-16 flex items-center justify-center text-3xl hover:bg-gray-300">+</div>
        </div>
    )
}
