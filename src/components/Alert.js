import React from 'react'

function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>

    // here && is used to check if props.alert is null or not if it is null then it will be false then div tag will not work other wise if props.alert is true then div tag will work and return.
    // props.alert && <div> is a syntax to avoid runtime error as primarily props.alert is null

  )
}

export default Alert
