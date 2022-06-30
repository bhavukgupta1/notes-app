import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react'


const NoteState = (props) => {
    const host = "http://localhost:5000"

    const notesInitial = [

    ]
    const [notes, setNotes] = useState(notesInitial)


    // getallnotes======================================================


    const getNotes = async () => {


        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },

        });
        const json = await response.json();
        // console.log(json)

        setNotes(notes.concat(json))


        // console.log("added");


    }








    //addnotes ================================================

    const addNote = async (title, description, tag) => {


        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();



        console.log("added" + json);

        const note = {

            "title": title,
            "description": description,
            "tag": tag,

        }
        setNotes(notes.concat(note))
    }


    // ==============================0======================


    //del 

    const delNote = async (id) => {

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            // body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        console.log(json);


        let newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }







    //edit==========================================================================================

    const editNote = async (_id, title, description, tag) => {

        // apicall



        const response = await fetch(`${host}/api/notes/updatenote/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ _id, title, description, tag })
        });
        const json = response.json();
        console.log("edited" + json);

        //edit 
        for (let index = 0; index < notes.length; index++) {
            const e = notes[index];
            if (e._id === _id) {
                notes.title = title;
                notes.description = description;
                notes.tag = tag;
            }

        }



    }
    // =======================================================================================


    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, delNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;