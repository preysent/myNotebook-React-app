import React, { useContext, useEffect } from "react"
import noteContext from "../context/NoteContext"

const About = () => {
  
  let a = useContext(noteContext)

  useEffect(()=>{
    a.update();
  },[])

  return (
    <div>
      this is about {a.state.name} my class is {a.state.class}
    </div>
  )
}

export default About
