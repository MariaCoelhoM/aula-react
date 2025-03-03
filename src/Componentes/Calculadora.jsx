import React, { useState } from "react";

const Calculadora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(null);
    /*e.target.value captura o valor digitado no input.*/ 
    /*e (abreviação de event) é o objeto do evento gerado pelo input.*/ 
  const novoNumero1 = (e) => setNum1(Number(e.target.value));
  const novoNumero2 = (e) => setNum2(Number(e.target.value));

  const somar = () => setResultado(num1 + num2);
  const subtrair = () => setResultado(num1 - num2);
  const multiplicar = () => setResultado(num1 * num2);
  const dividir = () => setResultado(num2 !== 0 ? num1 / num2 : "Erro");
  const zerar = () => {
    setNum1(0);
    setNum2(0);
    setResultado(null);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Calculadora</h1>
      <input type="number" value={num1} onChange={novoNumero1} />
      <input type="number" value={num2} onChange={novoNumero2} />
      <br />
      <button onClick={somar}>+</button>
      <button onClick={subtrair}>-</button>
      <button onClick={multiplicar}>*</button>
      <button onClick={dividir}>/</button>
      <button onClick={zerar}>Zerar</button>
      <h2>Resultado: {resultado !== null ? resultado : "-"}</h2>
    </div>
  );
};

export default Calculadora;
/*Desenvolva uma calculadora, que contenha as operações matemáticas simples (adição,
subtração, multiplicação e divisão) e dois campos de input para receber os números dos
usuários, e que mostre o valor dessas operações na tela. (e um botão de zerar)*/ 
