import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import {
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import { Note } from '../components/Note';

export const ViewPanel = ({ selectedNote, notes = [], setSelectedNote = () => { }, updateNote = () => { }, deleteNote = () => { } }) => {
    const history = useHistory()
    return <div className="w-full h-screen bg-gray-700 flex flex-col">
        <AnimatePresence exitBeforeEnter>
            <Switch location={history.location} key={history.location.pathname}>
                <Route path={"/"} exact render={(props) => <motion.div exit={{ x: "-100vw", opacity: 0 }} key={Date.now()} className="w-full h-screen bg-white flex items-center justify-center">Sol taraftan bir not seçiniz.</motion.div>} />
                <Route path={"/note/:id"} render={(props) => <Note key={Date.now()} {...props} />} />
                <Route path={"/create"} render={(props) => <Note key={Date.now()} {...props} />} />
            </Switch>
        </AnimatePresence>
    </div>
}
