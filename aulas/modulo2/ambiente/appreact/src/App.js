import React from 'react';

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = false;

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  return (
    <>
      <p style={estiloP}>Teste</p>
      {titulo} <p className={ativo ? 'ativo' : 'inativo'}>{random * 1000}</p>
    </>
  );
};

export default App;
