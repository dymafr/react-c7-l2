import React from 'react';

function handleClick() {
  console.log('CLIC');
}

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
