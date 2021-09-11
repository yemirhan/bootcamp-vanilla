import React, { useEffect, useState } from 'react'
import { NoteArea } from './NoteArea';
import { NoteFooter } from './NoteFooter';
import { TitleBar } from './TitleBar';

import {
    Switch,
    Route
} from "react-router-dom";

export const Edit = ({ selectedNote, notes = [], setSelectedNote = () => { }, updateNote = () => { }, deleteNote = () => { } }) => {
    const [note, setNote] = useState({})
    useEffect(() => {
        setNote(selectedNote ? selectedNote : {})
        return () => {
            setNote({})
        }
    }, [selectedNote])
    return <div className="w-full h-screen bg-gray-700 flex flex-col">

        <Switch>
            <Route path={"/"} exact render={(props) => <div className="w-full h-screen bg-white flex items-center justify-center">Sol taraftan bir not seçiniz.</div>} />
            <Route path={"/note/:id"} render={(props) => <div>d</div>} />
            <Route path={"/create"} render={(props) => <div>c</div>} />
        </Switch>

    </div>
    // if (!note?.createdAt) return <div className="w-full h-screen bg-white flex items-center justify-center">Sol taraftan bir not seçiniz.</div>
    // return (
    //     <div className="w-full h-screen bg-gray-700 flex flex-col">
    //         <TitleBar setSelectedNote={setSelectedNote} note={note} setNote={setNote} />
    //         <NoteArea note={note} setNote={setNote} />
    //         <NoteFooter note={note} deleteNote={deleteNote} updateNote={updateNote} />
    //     </div>
    // )
}
