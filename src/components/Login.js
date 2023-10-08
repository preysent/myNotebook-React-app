import React, { useState , useContext} from 'react'
import { useHistory } from "react-router-dom";//use to redirect at home page after logIN
import noteContext from '../context/notes/NoteContext';

const Login = () => {

    // set token is use to set token contxt varible
    const { setToken } = useContext(noteContext)
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useHistory()

    const Onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value }) //  important syntex , it updat the credentials state
    }

    const onSubmit = async(e) => {
        e.preventDefault()//prevent reaload

            // post request to login
            const responce = await fetch(`https://my-notebook-be-97vx.onrender.com/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",                    
                },
                body: JSON.stringify({ email:credentials.email,password:credentials.password}),
            });

            const res = await responce.json()
            if(res.Success){
                setToken(res.authToken)
               localStorage.setItem("authToken",res.authToken)
                history.push("/")
                // getAllNotes()
            }
    }
    return (
        <div className='container'>
        <h2 className='my-4' >Login ot myNotebook</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">

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
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

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
