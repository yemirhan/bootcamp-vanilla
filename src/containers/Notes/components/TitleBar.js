import React from 'react'

export const TitleBar = ({ setSelectedNote, setNote, note }) => {
    return (
        <div className="w-full py-2 px-3 flex flex-row justify-between bg-gray-100 items-center shadow-md">
            <input className="bg-transparent focus:bg-white hover:bg-gray-200 transition-colors w-96 p-2 font-semibold" placeholder="Not adı..." id="inputid" type="text" value={note?.noteTitle} onChange={({ target: { value } }) => setNote(n => ({ ...note, noteTitle: value }))} />
            <div onClick={setSelectedNote} className="text-xl cursor-pointer font-bold px-3 hover:bg-gray-300 rounded-lg">x</div>
        </div>
    )
}
