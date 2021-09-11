import React, { useState } from 'react'
import { NoteSM } from '../components/NoteSM'
import { NoteSearch } from '../components/NoteSearch'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

export const Tasks = ({ setSelectedNote, notes = [], selectedNote }) => {
    const [search, setSearch] = useState("")
    const $notes = useSelector(state => state.$notes)

    return (
        <motion.div className=" bg-white h-screen flex flex-col border-r border-gray-100"
            initial={$notes.isMenuOpen ? "open" : "collapsed"}
            animate={$notes.isMenuOpen ? "open" : "collapsed"}
            variants={{
                open: {
                    opacity: 1,
                    width: 400,

                },
                collapsed: { width: 0, opacity: 0, overflow:'hidden'}
            }
            }
        >
            <NoteSearch search={search} setSearch={setSearch} />
            {
                notes
                    .filter(note => note.noteTitle.includes(search))
                    .sort(e => 0 - e.createdAt)
                    .map(note => (
                        <NoteSM
                            key={note.createdAt}
                            selectedNote={selectedNote}
                            setSelectedNote={setSelectedNote}
                            note={note}
                        />
                    )
                    )
            }
        </motion.div >
    )
}
