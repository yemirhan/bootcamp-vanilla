import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useNote } from '../../../hooks/useNote'
import { $edit } from '../../../redux/notes.reducer'
import { Button } from './Button'
import { NoteArea } from './NoteArea'
import { NoteFooter } from './NoteFooter'
import { TitleBar } from './TitleBar'

export const Note = ({ match: { params: { id } } }) => {
    const [note, setNote] = useState({})
    const $notes = useSelector(state => state.$notes)
    const history = useHistory()
    const dispatch = useDispatch()
    const $n = useNote()
    useEffect(() => {
        // if (m.path === "/create") { setNote({ createdAt: null, noteTitle: "", note: "" }); dispatch($edit()) }
        // else 
        setNote(($notes.notes || []).find(d => d.createdAt === parseInt(id)))
        return () => {
            setNote({})
        }
    }, [])

    if (!note) return <div className="w-full h-screen bg-white flex flex-col items-center justify-center space-y-2">
        <p className="font-semibold text-xl">Bu not mevcut değil.</p>
        <Button type="primary">Yeni Not Oluştur</Button>
    </div>

    return (
        <motion.div exit={{ x: "-100vw", opacity: 0 }} className="w-full h-screen bg-gray-700 flex flex-col">
            <TitleBar setSelectedNote={() => history.push("/")} note={note} setNote={setNote} />
            <NoteArea note={note} setNote={setNote} />
            <NoteFooter note={note} deleteNote={$n.deleteNote} updateNote={$n.updateNote} />
        </motion.div>
    )
}
