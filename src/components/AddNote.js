import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

const AddNote = (props) => {
    const {Addnote} = useContext(noteContext)
    const [note, setNote]=useState({title:"",description:"",tag:""})

    const handleClick=(e)=>{

        // this function is use to prement the page reaload while click on submit button
        e.preventDefault()
        Addnote(note)
        setNote({title:"",description:"",tag:""})
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
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"  onChange={Onchange} value={note.title}/>              
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={Onchange}value={note.description}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={Onchange} value={note.tag} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={(note.title.length<3)||(note.description.length<5)}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
