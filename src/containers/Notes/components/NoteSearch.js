import React from 'react'
import searchIcon from "../assets/Search_Icon.svg"
export const NoteSearch = ({ search = "", setSearch = () => { } }) => {
    return (
        <div className="w-full px-2 py-2 bg-white inline-flex">
            <input type="search" className="w-full border-2 border-gray-200 rounded-lg p-2 mr-1" value={search} onChange={({ target: { value } }) => setSearch(value)} />
            <img src={searchIcon} alt="search" className="w-7" />
        </div>
    )
}
