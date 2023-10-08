import React from 'react'
import Notes from './Notes'


const About = (props) => {

  return (
    <div className="container my-4">


      <Notes showAlert={ props.showAlert }/>


    </div>
  )
}

export default About
