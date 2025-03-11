import React from "react";

const PerguntaAleatoria = () => {
  const respostas = [
    "Sim", "Não", "Talvez", "Depende", "Com certeza!", "Pergunte novamente", "Não posso dizer agora"
  ];

  const perguntarBola8 = () => {
    const respostaAleatoria = respostas[Math.floor(Math.random() * respostas.length)];
    alert(respostaAleatoria);
  };
/*Math.random() gera um número entre 0 e 1.
Multiplicamos por respostas.length (número total de respostas).
Math.floor() arredonda para um número inteiro entre 0 e respostas.length - 1.*/
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
/*Crie um componente que simula a famosa ‘Bola 8 Mágica’. Ao clicar em um botão “Pergunte
à Bola 8”, uma função é acionada e escolhe aleatoriamente uma resposta de um conjunto pré
definido (“Sim”, “Não”, “Talvez”, “Depende”...) e exibe a resposta em um alert
Dica: Utilizar Math.Random() para escolher aleatoriamente a resposta.*/
