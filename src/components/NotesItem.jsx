import React from 'react'

export default function NotesItem(props) {
    const { title, desc } = props
    return (
        <div>

            <div className="card m-3 " >
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">{desc}</p>

                    <div className="container d-flex justify-content-around">
                        <button className="btn btn-sm  btn btn-outline-dark">Edit</button>
                        <button className="btn btn-sm  btn btn-outline-dark">Delete</button>

                    </div>

                </div>
            </div>


        </div>
    )
}
