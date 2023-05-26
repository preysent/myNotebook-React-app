import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";//use to redirect at home page after logIN
import noteContext from '../context/notes/NoteContext';

const Login = () => {

    
    const { setToken } = useContext(noteContext)
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    let history = useHistory()



    const Onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value }) //  important syntex
    }


    const onSubmit = async (e) => {
        e.preventDefault()//prevent reaload
        // post request to login
        const responce = await fetch(`http://localhost:5000/api/auth/createUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
        });

        const res = await responce.json()
        if (res.Success) {
            setToken(res.authToken)
            localStorage.setItem("authToken", res.authToken)
            history.push("/")
        }
    }


    return (
        <div className='container'>
            <h2 className='my-4' >SighUp ot myNotebook</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label
                        htmlFor="name"
                        className="form-label">
                        Full Name
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        name="name"
                        value={credentials.name}
                        onChange={Onchange}
                    />


                    <label
                        htmlFor="exampleInputEmail1"
                        className="form-label">
                        Email address
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={credentials.email}
                        onChange={Onchange}
                    />

                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputPassword1"
                        className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={credentials.password}
                        onChange={Onchange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
