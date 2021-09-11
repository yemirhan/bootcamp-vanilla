import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { $edit } from '../../../redux/notes.reducer'
import { Button } from './Button'

export const NoteFooter = ({ note, deleteNote, updateNote }) => {
    const $notes = useSelector(state => state.$notes)
    const dispatch = useDispatch()
    return (
        <div className="w-full py-2 bg-white flex flex-row justify-end space-x-2 px-3">
            {!$notes.editOn && <><Button onClick={() => deleteNote(note.createdAt)} type={"danger"}>Notu Sil</Button>
                <Button onClick={() => dispatch($edit())} >Notu Güncelle</Button>
            </>}
            {$notes.editOn && <><Button onClick={() => deleteNote(note.createdAt)} type={"danger"}>Düzenlemeyi iptal et</Button>
                <Button onClick={() => dispatch($edit())} >Kaydet</Button>
            </>}

        </div>
    )
}
