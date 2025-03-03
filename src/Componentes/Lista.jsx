import React from "react";

function Lista() {
    const itens = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Array simples

    return (
        <ul>
            {itens.map((item, index) => (
                //itens.map(...) percorre cada item do array itens.
                <li key={index}>{item}</li> // Cada item do array vira um <li>
            ))}
        </ul>
    );
}

export default Lista;

/*- Crie uma lista não ordenada de um array simples
utilizando o .map()
*/