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

{/* Crie dois componentes: Header e Footer.
O Header deve exibir um título e um subtítulo recebidos por props, e o Footer deve
exibir um rodapé com o ano atual e um texto recebido por props.
Estilize ambos no arquivo .css
Dica: Utilize Date() */}