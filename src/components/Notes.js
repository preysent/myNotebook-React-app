import React, { useState ,useContext, useEffect, useRef } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'



const Notes = () => {

    useEffect(() => {
        getAllNotes()
        // eslint-disable-next-line
    }, [])

    const updateNote = (note) => {
        ref.current.click()//use to click on the button using ref
        seteNote({etitle:note.title,edescription:note.description,etag:note.tag,eId:note._id})
    }

    // here is a ref variable wich reffer to modal button
    const ref = useRef('')
    const { note, getAllNotes, Updatenote } = useContext(noteContext)    
    const [enote, seteNote]=useState({etitle:"",edescription:"",etag:"",eId:""})



    const handleClick=(e)=>{
        // this function is use to prement the page reaload while click on submit button
        e.preventDefault()
        Updatenote(enote)
    }

    const Onchange=(e)=>{
        seteNote({...enote, [e.target.name] : e.target.value}) //  important syntex
    }

    return (
        <>
            <AddNote />
            <div className='my-4'>
                <h4>your Note</h4>

                {/* modal for updating the notes , ref is pointing to the button*/}

                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                {/* form-------------------------------------------- */}
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="etitle" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={Onchange} value={enote.etitle} />

                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="edescription" className="form-label">description</label>
                                        <input type="text" className="form-control" id="edescription" name="edescription" onChange={Onchange} value={enote.edescription}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="etag" className="form-label">description</label>
                                        <input type="text" className="form-control" id="etag" name="etag" onChange={Onchange} value={enote.etag} />
                                    </div>

                                   </form>
                                {/*/ form-------------------------------------------- */}
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleClick} >Update Note</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-1 row'>
                    {
                        note.map((note) => {
                            return <NoteItem key={note._id} note={note} updateNote={updateNote} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Notes
