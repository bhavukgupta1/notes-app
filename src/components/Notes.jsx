import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import NotesItem from './NotesItem'



export default function Notes() {

    const context = useContext(noteContext)
    const { notes, getNotes } = context

    useEffect(() => {
        getNotes();
    }, []);


    // const ref = useRef(null)

    // const updateNote = (note) => {
    //     console.log(note)
    //     ref.current.click()
    // }
   


    return (
        <div>
            <AddNote />
            <hr />
            {/* ================================================================ */}


            {/* <button type="button"  className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">edit note</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> 
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
 */}



            {/* ======================================================================== */}

            <div className="container">
                <h1 className='m-3'>Your Notes</h1>
                {notes.map((e) => { return <NotesItem key={e._id} _id={e._id} title={e.title} desc={e.description}  note={e} /> })}

            </div>

        </div>
    )
}
