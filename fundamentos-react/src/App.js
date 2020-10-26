import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Desafio01 from './components/basics/Desafio01'

const App = () => (
    <div id="app">
        <h1>Fundamentos react</h1>

        <Desafio01 min={10} max={50} />
        <Fragmento />
        <ComParametro 
            titulo='Situação do Aluno' 
            nome='Claudio' 
            nota={7.0} 
        />
        <Primeiro />
    </div>
)

export default App