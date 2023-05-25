import { useState } from "react";
import noteContext from "./NoteContext";
const host = "http://localhost:5000"

const NoteState = (props) => {


  // Get all notes fn
  const getAllNotes = async () => {

    const response = await fetch(`${host}/api/notes/featchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2OWQyNWRkYzhkNmUwNWQyNDNlODNhIn0sImlhdCI6MTY4NDY3ODQ2Nn0.u73Kq--vRkMt5rG1zq2f6ni7bSUvF3OSccqGKCwuE6k"
      },
    });

    const data = await response.json();

    setNote(data)
  }


  // Adding Note
  const Addnote = async ({ title, description, tag }) => {

    await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2OWQyNWRkYzhkNmUwNWQyNDNlODNhIn0sImlhdCI6MTY4NDY3ODQ2Nn0.u73Kq--vRkMt5rG1zq2f6ni7bSUvF3OSccqGKCwuE6k"
      },
      body: JSON.stringify({ title, description, tag }),
    });


    await getAllNotes()

  }


  // Updating Note
  const Updatenote = async ({ eId, etitle, edescription, etag }) => {

      await fetch(`${host}/api/notes/update/${eId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2OWQyNWRkYzhkNmUwNWQyNDNlODNhIn0sImlhdCI6MTY4NDY3ODQ2Nn0.u73Kq--vRkMt5rG1zq2f6ni7bSUvF3OSccqGKCwuE6k"
      },
      body: JSON.stringify({ title: etitle, description: edescription, tag: etag }),
    });



    getAllNotes()
  }

  //Deleteing Note
  const Deletenote = async (id) => {

    await fetch(`${host}/api/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ2OWQyNWRkYzhkNmUwNWQyNDNlODNhIn0sImlhdCI6MTY4NDY3ODQ2Nn0.u73Kq--vRkMt5rG1zq2f6ni7bSUvF3OSccqGKCwuE6k"
      },

    });


    await getAllNotes()
  }

  const [note, setNote] = useState([])
  return (
    <noteContext.Provider value={{ note, Addnote, Deletenote, Updatenote, getAllNotes }}>
      {props.children}
    </noteContext.Provider>
  )
}



export default NoteState