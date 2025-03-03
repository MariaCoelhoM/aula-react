import React, { useState } from "react";

const Contador = () => {
  const [valor, setCount] = useState(0);

  const incrementar = () => {
    setCount(valor + 1);
  };

  const discrementar = () => {
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
