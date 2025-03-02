import React from "react"

function Footer(props){
    return(
        <>
        <h3>{props.textDisplay}</h3>
        <p>{Date()}</p>
        </>
    )
}
export default Footer