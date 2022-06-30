import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {



    const location = useLocation()
    useEffect(() => {
        // ga('send', 'pageview');
        // console.log(location);
    }, [location]);


    const [s, sets] = useState("")

    // const handleclicklogin = () => {

    //     sets('active')

    // }

    const handleclicklogout = () => {

        localStorage.clear()
        // sets('disabled')

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Notes.com</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} aria-current="page" to="/about">About</Link>
                            </li>


                        </ul>

                        <form className='d-flex'>

                            <Link role='button' to='/login' className="btn btn-dark border border-light m-2 my-sm-0 " type="submit">LogIN</Link>
                            <Link role='button' to='/logout' onClick={handleclicklogout} className={`btn btn-dark border border-light m-2 my-sm-0 ${s}`} type="submit">LogOut</Link>
                            <Link role='button' to='/signup' className="btn btn-dark border border-light m-2 my-sm-0" type="submit">SignUp</Link>

                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}
