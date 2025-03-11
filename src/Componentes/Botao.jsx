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
/*props (propriedades) são valores passados de um componente pai para um componente filho.*/
export default Botao
/*Crie um componente que renderize três botões que recebam props para mudar seu
texto e sua cor*/
