import React, { useState } from "react";
/*Usa o useState(0) para criar um estado chamado valor, que começa em 0.
setCount é a função que atualiza o estado valor.*/
const Contador = () => {
  const [valor, setCount] = useState(0);

  const incrementar = () => {/*Aumenta valor em 1 toda vez que for chamada.*/
    setCount(valor + 1);
  };

  const discrementar = () => {/*Diminui valor em 1, mas só se for maior que 0 (evita números negativos).*/
    if (valor > 0) {
      setCount(valor - 1);
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>Contador: {valor}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={discrementar}>Decrementar</button>
    </div>
  );
};

export default Contador;
/*Desenvolva um contador, que incremente e decremente e renderize seu valor atual na tela,
mas impossibilite que o contador fique negativo.*/
