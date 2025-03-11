import React, { useState } from "react";

const Botaouser = () => { /*Aqui, Botaouser é um componente funcional do React.
Está sendo definido como uma arrow function (() => {}).*/
  
  const [darkMode, setDarkMode] = useState(false); /*useState(false) cria um estado chamado darkMode, que começa como false.
setDarkMode é a função que atualiza esse estado.*/

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  /*Essa função inverte o valor de darkMode sempre que for chamada.
Se darkMode for false, muda para true, e vice-versa.
*/
  return (
    <div style={{
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      height: "100vh",
      display: "flex",
      alignItems: "center",  /*parte do codigo só pra ficar bom de entender*/
      justifyContent: "center"  /*parte do codigo só pra ficar bom de entender*/
    }}>
      <button onClick={toggleTheme}>
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
    </div>
  );
};

export default Botaouser;
/* Desenvolva um Botão que que faça a mudança de estado do tema da sua tela inicial,
alternando entre tema claro e escuro – usando useState */
