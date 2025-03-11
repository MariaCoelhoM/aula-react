import React, { useState } from "react";

/*O show é uma prop que o componente Content recebe. 
Ele serve para determinar se o conteúdo dentro do componente 
será exibido ou não.*/ 
const Content = ({ show }) => {
  if (!show) 
    return null;
  return <p>Este é o conteúdo exibido!</p>;
};

const Conteudo = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <button onClick={toggleContent}>
        {showContent ? "Ocultar Conteúdo" : "Mostrar Conteúdo"} 
      </button>
      <Content show={showContent} />
    </div>
  );
};
/*showContent é uma variável (provavelmente um estado no React).
Se showContent for true, exibe "Ocultar Conteúdo".
Se showContent for false, exibe "Mostrar Conteúdo".*/
export default Conteudo;
/*Crie um botão que controla a exibição de um conteúdo
Dica: props e if*/
