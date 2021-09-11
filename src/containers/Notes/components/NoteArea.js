import React, { useEffect, useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import { useSelector } from 'react-redux';
import { Notes } from '../Notes';
export const NoteArea = ({ note, setNote }) => {
    const $notes = useSelector(state => state.$notes);
    return (
        <div className="w-full h-full flex flex-grow flex-shrink p-3 bg-white">
            {/* <textarea style={{ resize: "none" }} className="w-full h-full flex flex-grow flex-shrink border rounded-lg p-2" name="note" id="" value={note?.note} onChange={({ target: { value } }) => setNote(n => ({ ...note, note: value }))}></textarea> */}
            {$notes.editOn && <MDEditor
                value={note.note}
                onChange={(value) => setNote(n => ({ ...n, note: value }))}
                className="w-full h-full"
            />}
            {!$notes.editOn && <MDEditor.Markdown source={note.note} />}
        </div>
    )
}
