import React from "react"

function Header(props){
    return(
        <>
        <h1>{props.titulo}</h1>
        <h2>{props.substituto}</h2>
        </>
    )
}
export default Header