import React from 'react'

let css = {
  // height:"3rem",
}

export default function Alert(props) {


  // the Syntax props.alert && html element is use becouse if props.alert is null then it don't return any value
  return <div style={{height:'45px'}}>

   {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert" style={ css }>
        <strong>{props.alert.head}</strong> {props.alert.message}
        </div>   
  )}

  </div>
}
