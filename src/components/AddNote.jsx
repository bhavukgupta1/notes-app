
import React, { useContext } from 'react'
import { useState } from 'react'
import noteContext from '../context/notes/noteContext'
export default function AddNote() {
    const context = useContext(noteContext)
    const { addNote } = context
const [note,setNote] = useState({title:"",desc:"",tag:""})
    const handleClick = (e) => {
        e.preventDefault()
addNote(note.title,note.desc,note.tag)
    }

    const onChange = (e) => {
setNote({
    ...note,
    [e.target.name]:e.target.value
})
console.log(note)
    }

    return (
        <div>
            <div className="container">
                <h1 className='m-2'>Add a Note</h1>

                <hr />
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input onChange={onChange} type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input onChange={onChange} type="text" className="form-control" id="desc" name='desc' />
                    </div>

                    <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
                </form>



            </div>
        </div>
    )
}
