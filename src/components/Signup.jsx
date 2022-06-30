import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setname] = useState("")
    let navigate = useNavigate();

    const handlename = (e) => {
        setname(e.target.value)
    }

    const handleemail = (e) => {
        setEmail(e.target.value)
    }

    const handlepass = (e) => {
        setPassword(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(email);

        const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json();
        console.log(json)
        navigate("/login")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group m-3">
                    <label htmlFor="name">Enter User Name</label>
                    <input type="name" onChange={handlename} className="form-control my-2" id="name" name='name' value={name} aria-describedby="emailHelp" placeholder="Enter User Name" />

                </div>
                <div className="form-group m-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" onChange={handleemail} className="form-control my-2" id="email" name='email' value={email} aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div className="form-group m-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={handlepass} className="form-control my-2" id="password" value={password} name='password' placeholder="Password" />
                </div>

                <button type="submit"  className="btn btn-sm m-3 btn btn-outline-dark">Submit</button>
            </form >

        </div>
    )
}
