import React from "react";

const PerguntaAleatoria = () => {
  const respostas = [
    "Sim", "Não", "Talvez", "Depende", "Com certeza!", "Pergunte novamente", "Não posso dizer agora"
  ];

  const perguntarBola8 = () => {
    const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
    alert(respostaAleatoria);
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>Bola 8 Mágica</h1>
      <button onClick={perguntarBola8}>Pergunte à Bola 8</button>
    </div>
  );
};

export default PerguntaAleatoria;
