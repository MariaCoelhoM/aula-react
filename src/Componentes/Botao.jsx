import React from "react"

function Botao(props){
    return(
        <>
            <h1 style={{ backgroundColor: props.color }}>
                {props.textDisplay}
            </h1>
        </>
    )
}
export default Botao
/*Crie um componente que renderize três botões que recebam props para mudar seu
texto e sua cor*/
