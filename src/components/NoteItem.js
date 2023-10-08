import React,{ useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {
    const {Deletenote} = useContext(noteContext)

    const { note, updateNote } = props;

    const handleDelete = () => {
        Deletenote( note._id)
        props.showAlert("success","Deleted","Note deleted Succefully")
    }

    return (
        <div className="col-md-4 my-3">
            <div className="card " >
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash mx-2" onClick={ handleDelete }></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
