import React from 'react'
import pencil from '../assets/Ei-pencil.svg'
export const SideMenu = ({createNote = ( ) => {}}) => {
    return (
        <div className="w-20 h-screen bg-gray-200 py-2 flex flex-col items-center relative">
            <img src={pencil} alt="pencil" />
            <div onClick={createNote} className="w-full h-20 flex items-center justify-center text-3xl hover:bg-gray-300">+</div>
            <img src={null} className="w-12 h-12 rounded-full bg-gray-100 ring ring-gray-400 absolute bottom-2" alt="" />
        </div>
    )
}
