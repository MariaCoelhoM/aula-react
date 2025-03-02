import React from "react";

function Lista() {
    const itens = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Array simples

    return (
        <ul>
            {itens.map((item, index) => (
                <li key={index}>{item}</li> // Cada item do array vira um <li>
            ))}
        </ul>
    );
}

export default Lista;
