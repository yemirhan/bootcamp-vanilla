import React from 'react'

export const NoteArea = ({ note, setNote }) => {
    return (
        <div className="w-full h-full flex flex-grow flex-shrink p-3 bg-white">
            <textarea style={{ resize: "none" }} className="w-full h-full flex flex-grow flex-shrink border rounded-lg p-2" name="note" id="" value={note?.note} onChange={({ target: { value } }) => setNote(n => ({ ...note, note: value }))}></textarea>
        </div>
    )
}
