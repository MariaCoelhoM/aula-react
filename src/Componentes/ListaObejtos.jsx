import React from "react";

function ListaObjetos() {
    const itens = ["gato", "foca", "coelho", "leão"]; // Array simples

    return (
        <ul>
            {itens.map((item, index) => (
                <li key={index}>{item}</li> // Cada item do array vira um <li>
            ))}
        </ul>
    );
}

export default ListaObjetos;
/*– Crie uma lista não ordenada de um array de objetos, e mostre pelo menos duas propriedades
dele na tela*/
