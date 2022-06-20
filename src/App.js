import React from 'react';

function handleClick(e) {
  console.log('CLIC', e);
}

function handleInput(e) {
  console.log('INPUT', e);
}

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-20">
      <button onClick={handleClick} className="mb-20">
        Submit
      </button>
      <input type="text" onInput={handleInput}></input>
    </div>
  );
}

export default App;
