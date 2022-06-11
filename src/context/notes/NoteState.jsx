import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react'


const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "61322f19553781a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInitial)
    //add

    const addNote = (title, description, tag) => {
        //todo api xall
console.log("added");
    
       const note = {
            "_id": "61322f19553781a8ca8d0ie08",
            "user": "6131dc5e3e4037cd4734kua066",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    //del 

    const delNote = () => {

    }

    //edit

    const editNote = () => {

    }



    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, delNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;