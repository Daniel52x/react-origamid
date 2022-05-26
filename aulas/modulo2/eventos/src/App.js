import React from 'react';

const App = () => {
  function handleClick(event) {
    console.log(event.target);
  }

  function handleScrool(event) {
    console.log(event);
  }

  window.addEventListener('scroll', handleScrool);

  return (
    <div style={{height: '200vh'}}>
      <button onClick={(event) => alert(event.target.innerText)}>
        Compre Vioção
      </button>
    </div>
  );
};

export default App;
