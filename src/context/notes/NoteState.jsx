import React from 'react'
import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {
    // const s1 = 1
    // {
    //     "name" : "bhavuk",
    //     "class" : 15
    // }
    const [state, setState] = useState({ "name": "bhavuk", "class": 15 })

    const update = () => {
        setTimeout(() => {
            // setState()
            setState({
                "name": "hello harry",
                "class": 15
            })

        }, 1000)

    }
    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;