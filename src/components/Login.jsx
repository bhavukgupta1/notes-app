import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleemail = (e) => {
        setEmail(e.target.value)
    }

    const handlepass = (e) => {
        setPassword(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(email);

        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authtoken)


            navigate("/")

        }
        else {
            alert("invalid")
        }



    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group m-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" onChange={handleemail} className="form-control my-2" id="email" name='email' value={email} aria-describedby="emailHelp" placeholder="Enter email" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group m-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={handlepass} className="form-control my-2" id="password" value={password} name='password' placeholder="Password" />
                </div>

                <button type="submit" className="btn btn-sm m-3 btn btn-outline-dark">Submit</button>
            </form >

        </div>
    )
}
