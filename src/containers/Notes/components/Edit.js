import React, { useEffect, useState } from 'react'
import { Button } from './Button';

export const Edit = ({ selectedNote, notes = [], setSelectedNote = () => { }, updateNote = () => { }, deleteNote = () => {}}) => {
    const [note, setNote] = useState({})
    useEffect(() => {
        console.log(notes.find(n => n.createdAt === selectedNote));
        setNote(notes.find(n => n.createdAt === selectedNote))
        return () => {
            setNote([])
        }
    }, [notes, selectedNote])
    if (!note?.createdAt) return <div className="w-full h-screen bg-white flex items-center justify-center">Sol taraftan bir not seçiniz.</div>
    return (
        <div className="w-full h-screen bg-gray-700 flex flex-col">
            <div className="w-full py-2 px-3 flex flex-row justify-between bg-gray-100">
                <input className="bg-transparent focus:bg-white hover:bg-gray-200 transition-colors w-96" placeholder="Not adı..." id="inputid" type="text" value={note?.noteTitle} onChange={({ target: { value } }) => setNote(n => ({ ...note, noteTitle: value }))} />
                <div onClick={() => setSelectedNote(null)}>x</div>
            </div>
            <div className="w-full h-full flex flex-grow flex-shrink p-3 bg-white">
                <textarea style={{ resize: "none" }} className="w-full h-full flex flex-grow flex-shrink border rounded-lg p-2" name="note" id="" value={note?.note} onChange={({ target: { value } }) => setNote(n => ({ ...note, note: value }))}></textarea>
            </div>
            <div className="w-full py-2 bg-white flex flex-row justify-end space-x-2 px-3">
                <Button onClick={() => deleteNote(note.createdAt)} type={"danger"}>Notu Sil</Button>
                <Button onClick={() => updateNote(note.createdAt, note.note, note.noteTitle)} >Notu Güncelle</Button>
            </div>
        </div>
    )
}
