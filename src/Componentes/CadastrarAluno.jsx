import React, { useState } from "react";

const CadastrarAluno = () => {
  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");
  const [curso, setCurso] = useState("");
/*alunos: guarda a lista de alunos cadastrados (começa como um array vazio []).
nome, idade, cidade e curso: armazenam os dados do aluno antes de serem adicionados à lista.*/
  const adicionarAluno = () => {
    if (nome && idade && cidade && curso) { 
//Verifica se todos os campos estão preenchidos (if (nome && idade && cidade && curso)).
//Cria um objeto novoAluno com os dados inseridos.
      const novoAluno = { nome, idade, cidade, curso };
      /*setAlunos([...alunos, novoAluno]) 
      atualiza o estado alunos com o novo array.*/ 
      setAlunos([...alunos, novoAluno]); 
      setNome("");
      setIdade("");
      setCidade("");
      setCurso("");
    }
  };

  const exibirNome = (nome) => {
    alert(`Aluno: ${nome}`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Cadastro de Alunos</h1>
      <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="number" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
      <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
      <input type="text" placeholder="Curso" value={curso} onChange={(e) => setCurso(e.target.value)} />
      <button onClick={adicionarAluno}>Adicionar Aluno</button>
      <div>
        {alunos.map((aluno, index) => (
          <div key={index} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h2>{aluno.nome}</h2>
            <p>Idade: {aluno.idade}</p>
            <p>Cidade: {aluno.cidade}</p>
            <p>Curso: {aluno.curso}</p>
            <button onClick={() => exibirNome(aluno.nome)}>Mostrar Nome</button>
          </div>
        ))}
      </div>
    </div>
  );
};
/*type="text" → Define o tipo do input como texto.
placeholder="Nome" → Mostra um texto cinza indicando que o usuário deve digitar o nome.
value={nome} → O valor do input está vinculado ao estado nome. Isso significa que ele sempre mostrará o valor atual do estado.
onChange={(e) => setNome(e.target.value)} → Atualiza o estado nome sempre que o usuário digita algo no campo.*/
export default CadastrarAluno;
/* Desenvolva uma aplicação que permita cadastrar e exibir uma lista de alunos.
Cada aluno será representado por um Card, contendo Nome, Idade, Cidade e Curso, além de um
botão para exibir um alerta com o nome do aluno.*/ 
