import React from 'react'

export const NoteSearch = ({ search = "", setSearch = () => { } }) => {
    return (
        <input type="search" className="w-full border-2 border-gray-200 rounded-lg" value={search} onChange={({ target: { value } }) => setSearch(value)} />
    )
}
