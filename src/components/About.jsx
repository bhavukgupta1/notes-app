import React, { useContext, useEffect } from 'react';
import noteContext from '../context/notes/noteContext';
// import { useEffect } from 'react';
export default function About() {
    const e = useContext(noteContext)
    useEffect(() => {
        e.update()
    })
    return (
        <div>
            About this is about {e.state.name}
        </div>
    )
}
