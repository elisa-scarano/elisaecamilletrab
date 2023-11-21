import React, { useState } from 'react'
import './App.css';
import CalcularMedia from './componentes/media';


function App() {
  return (
    <div className="App">
      <h1>Calculadora de Média</h1>
      <h2>Descubra sua média</h2>
      <CalcularMedia/>
    </div>
  );
}

export default App;
