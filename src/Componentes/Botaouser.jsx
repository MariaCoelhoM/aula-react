import React, { useState } from "react";

const Botaouser = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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