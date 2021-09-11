import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { $menu } from '../../../redux/notes.reducer'
import pencil from '../assets/Ei-pencil.svg'
export const SideMenu = ({ createNote = () => { } }) => {
    const $notes = useSelector(state => state.$notes)
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div className="w-20 h-screen bg-gray-200 py-2 flex flex-col items-center relative">
            <img src={pencil} alt="pencil" />
            <div onClick={() => history.push("/create")} className="w-full h-20 flex items-center justify-center text-3xl hover:bg-gray-300">+</div>
            <div onClick={() => dispatch($menu())} className={`absolute bottom-20 w-12 h-12 rounded-full hover:bg-gray-300 transition-all flex items-center justify-center cursor-pointer transform ${!$notes.isMenuOpen ? "rotate-180" : ""}`} >{"<"}</div>
            <img src={null} className="w-12 h-12 rounded-full bg-gray-100 ring ring-gray-400 absolute bottom-2" alt="" />
        </div>
    )
}
