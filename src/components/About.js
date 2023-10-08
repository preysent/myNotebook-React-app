import React from "react"

const About = () => {
  
  const st = {
    background : "url(https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-743986.jpg&fm=jpg)",
    backgroundSize:"contain",
    backgroundPosition:"buttom",
    height:"100%"
  }


  return (
    <div style={st} className="h-50 d-flex justify-content-center p-2">
      <h1 className="fs-1">About Us</h1>
    </div>
  )
}

export default About
