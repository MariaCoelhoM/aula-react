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

export default Conteudo;
