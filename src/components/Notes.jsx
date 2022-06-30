import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import NotesItem from './NotesItem'
import { useNavigate } from "react-router";


export default function Notes() {
    let navigate = useNavigate();
    const context = useContext(noteContext)
    const { notes, getNotes } = context

    useEffect(() => {

        if (localStorage.getItem('token')) {

            getNotes();

        }

        else {
            navigate("/login")

        }
    }, []);





    return (
        <div>
            <AddNote />
            <hr />

            <div className="container">
                <h1 className='m-3'>Your Notes</h1>
                {notes.map((e) => { return <NotesItem key={e._id} _id={e._id} title={e.title} desc={e.description} note={e} /> })}

            </div>

        </div>
    )
}
