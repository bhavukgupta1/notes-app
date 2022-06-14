
import React from 'react'
import { useState, useContext } from 'react'
import noteContext from '../context/notes/noteContext'
export default function Update(props) {
    const { title, desc, tag, _id, hidden } = props
    const context = useContext(noteContext)

    const { editNote } = context




    const onChange = (e) => {
        seteNote({
            ...eNote,
            [e.target.name]: e.target.value
        })
        console.log(eNote)
    }



    const [eNote, seteNote] = useState({
        etitle: title,
        edesc: desc,
        etag: "default "

    })

    const handleupdate = (e) => {

        editNote(_id, eNote.etitle, eNote.edesc, eNote.etag)

    }

    return (
        <div>
            <div className={`container border border-dark p-3  bg-light text-dark ${hidden}`}>
                <h4 className='m-2'>Update your note </h4>

                <hr />
                <form>
                    <div className="mb-3">
                        <label htmlFor="etitle" className="form-label">Title</label>
                        <input onChange={onChange} type="text" className="form-control" id="etitle" name='etitle' value={eNote.etitle} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="edesc" className="form-label">Description</label>
                        <input onChange={onChange} type="text" className="form-control" id="edesc" name='edesc' value={eNote.edesc} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="etag" className="form-label">Tag</label>
                        <input onChange={onChange} type="text" className="form-control" id="etag" name='etag' value={eNote.etag} />
                    </div>
                    <din className="container">
                        <button type="submit" onClick={handleupdate} className="btn btn-sm  btn btn-outline-dark">Update</button>

                    </din>
                </form>



            </div>
        </div>
    )
}
