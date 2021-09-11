import React, { useEffect, useState } from 'react'
import {
    Switch,
    Route
} from "react-router-dom";
import { Note } from '../components/Note';

export const ViewPanel = ({ selectedNote, notes = [], setSelectedNote = () => { }, updateNote = () => { }, deleteNote = () => { } }) => {
    return <div className="w-full h-screen bg-gray-700 flex flex-col">
        <Switch>
            <Route path={"/"} exact render={(props) => <div className="w-full h-screen bg-white flex items-center justify-center">Sol taraftan bir not seçiniz.</div>} />
            <Route path={"/note/:id"} render={(props) => <Note {...props} />} />
            <Route path={"/create"} render={(props) => <div>c</div>} />
        </Switch>
    </div>
}
