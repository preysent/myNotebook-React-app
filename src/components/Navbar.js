import React, {  } from 'react'
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

    //here using location hook from react router to find the location of currant route
    let location = useLocation();

    // use effect will run after location mount's
    // useEffect(() => {
    //     console.log(location.pathname)
    // }, [location]);


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${(location.pathname === "/") ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>

                    </ul>


                    <form className="d-flex" role="search">
                        <Link to="/Login" className="btn btn-primary mx-1" role="button" aria-disabled="true">Login</Link>
                        <Link to="/SignUp" className="btn btn-primary mx-1" role="button" aria-disabled="true">SignUp</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
