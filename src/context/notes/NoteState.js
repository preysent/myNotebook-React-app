import { useState } from "react";
import noteContext from "./NoteContext";
const host = "https://my-notebook-be-97vx.onrender.com"

const NoteState = (props) => {


  // Get all notes fn
  const getAllNotes = async () => {

    const response = await fetch(`${host}/api/notes/featchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth_token": `${Token}`
      },
    });

    const data = await response.json();

    setNote(data)
  }


  // Adding Note
  const Addnote = async ({ title, description, tag }) => {

    const responce= await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth_token":  `${Token}`
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const res = await responce.json() 

    setNote(note.concat(res))


  }


  // Updating Note
  const Updatenote = async ({ eId, etitle, edescription, etag }) => {

      await fetch(`${host}/api/notes/update/${eId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth_token":  `${Token}`
      },
      body: JSON.stringify({ title: etitle, description: edescription, tag: etag }),
    });


    const updatedNote = note.map((item) => {
      if (item._id === eId) {
        return {
          ...item,
          title: etitle,
          description: edescription,
          tag: etag,
        };
      }
      return item;
    });
    
    setNote(updatedNote);
    

  }

  //Deleteing Note
  const Deletenote = async (id) => {

    await fetch(`${host}/api/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth_token":  `${Token}`
      },

    });

    const newNote = note.filter((itms)=>{
      return itms._id!==id
    })

    setNote(newNote)

  }

  const [note, setNote] = useState([])
  
  // i need to use Token state becouse it when we login or signup the we cannot accece the new auth token without reload the page
  const[Token, setToken]=useState(localStorage.getItem('authToken'))
  return (
    <noteContext.Provider value={{ note, Addnote, Deletenote, Updatenote, getAllNotes ,setToken }}>
      {props.children}
    </noteContext.Provider>
  )
}



export default NoteState