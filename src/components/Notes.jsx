import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import NotesItem from './NotesItem'



export default function Notes() {

    const context = useContext(noteContext)
    const { notes} = context


    return (
        <div>
            <AddNote/>
            <hr />
            <div className="container">
                <h1 className='m-2'>Your Notes</h1>
                {notes.map((e) => { return <NotesItem title={e.title} desc={e.description} />})}

            </div>
           
        </div>
    )
}
