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

/* Crie dois componentes: Header e Footer.
O Header deve exibir um título e um subtítulo recebidos por props, e o Footer deve
exibir um rodapé com o ano atual e um texto recebido por props.
Estilize ambos no arquivo .css
Dica: Utilize Date() */