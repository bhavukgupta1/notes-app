import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Update from './Update'
export default function NotesItem(props) {
    const context = useContext(noteContext)
    const { delNote } = context
    const { _id, title, desc, tag, } = props
    // const {notes} =props

    const handleDelete = () => {
        delNote(_id)
        // console.log(_id);
    }

    const [hidden, setHidden] = useState("d-none")


    const handleUpdate = () => {
        setHidden("d-block")
    }
    const handleHidden = () => {
        setHidden("d-none")
    }


    return (
        <div>


            {/* ===================================================================================================== */}
            <div className="card m-3 " >
                <div className="card-header bg-dark text-light">
                    {title}
                </div>

                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">{desc}</p>

                    <div className="container d-flex justify-content-around">
                        <button onClick={handleUpdate} className="btn btn-sm  btn btn-outline-dark">Edit</button>
                        <button onClick={handleHidden} className="btn btn-sm  btn btn-outline-dark">Close Editor</button>
                        <button onClick={handleDelete} className="btn btn-sm  btn btn-outline-dark">Delete</button>

                    </div>

                </div>
            </div>
          
          {/* //u0pdate componenet */}
            <Update hidden={hidden} _id={_id} title={title} desc={desc} tag={tag} />

        </div>
    )
}
