import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componentes/Header.jsx'
import Footer from './Componentes/Footer.jsx'
import Botao from './Componentes/Botao.jsx'
import Lista from './Componentes/Lista.jsx'
import ListaObjetos from './Componentes/ListaObejtos.jsx'
import Botaouser from './Componentes/Botaouser.jsx'
import Conteudo from './Componentes/Conteudo.jsx'
import Contador from './Componentes/Contador.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header titulo="Título" substituto="Substituto"/>
      <Botao textDisplay ="Botão 1" color = "pink"/>
      <Botao textDisplay ="Botão 2" color = "blue"/>
      <Botao textDisplay ="Botão 3" color = "black"/>
      <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
      </ul>

      <ul>
    <li>"gato"</li>
    <li>"foca"</li>
    <li>"coelho"</li>
    <li>"leão"</li>
      </ul>
      <Botaouser></Botaouser>   {/*chama a função que muda de cor o fundo da tela*/}
      <Conteudo></Conteudo>
      <Contador></Contador>
      <Footer textDisplay= "Ano atual:"/>

    </>
  )
}

export default App
