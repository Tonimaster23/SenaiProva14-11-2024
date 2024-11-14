import React, { useState } from 'react';

function App() {
  
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
    if (temaEscuro) {
      document.body.style.backgroundColor = 'white'; 
      document.body.style.color = 'black';  
    } else {
      document.body.style.backgroundColor = 'black';  
      document.body.style.color = 'white';  
    }
  };
  
  const incrementar = (valor) => {
    setContador(contador + valor);
  };

  const decrementar = (valor) =>{
    setContador(contador - valor)
  }

  const resetar = () => {
    setContador(0)
  }

  const verificarTexto = () =>{
    if(texto == 'SENAI') {
      alert('SENAI!!!');
    }
  };
  return (
    <>
    <div>
      <h1>Alterar Tema</h1>
      <button onClick={alternarTema}>
        {temaEscuro ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => incrementar(1)}>Incrementar 1 </button>
      <button onClick={() => decrementar(1)}>Decrementar 1 </button>
      <button onClick={() => incrementar(10)}>Incrementar 10</button>
      <button onClick={()=> incrementar(10)}>Decrementar 10</button>
      <button onClick={resetar}>Resetar</button>
    </div>
    <div>
      <h1>Campo de Texto</h1>
      <input type='text' value={texto} onChange={(e) => setTexto(e.target.value)} placeholder='Digite algo:' />
      <button onClick={verificarTexto}>Verficar Texto</button>
    </div>
    </>
  );






}



export default App;
