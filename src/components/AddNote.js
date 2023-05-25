import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = (props) => {
    const {Addnote} = useContext(noteContext)
    const [note, setNote]=useState({title:"",description:"",tag:""})

    const handleClick=(e)=>{

        // this function is use to prement the page reaload while click on submit button
        e.preventDefault()
        Addnote(note)
    }

    const Onchange=(e)=>{

        setNote({...note, [e.target.name] : e.target.value}) //  important syntex
    }

    return (
        <div>
            <h3>Add Note here</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"  onChange={Onchange}/>
              
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={Onchange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">description</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={Onchange}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick} >Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
