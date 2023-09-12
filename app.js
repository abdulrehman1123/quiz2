import React, { useState } from 'react';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([
    { id: 1, color: 'white' },
    { id: 2, color: 'white' },
    { id: 3, color: 'white' },
    { id: 4, color: 'white' },
    { id: 5, color: 'white' },
    { id: 6, color: 'white' },
  ]);

  const toggleColor = (id) => {
    const updatedBoxes = boxes.map((box) => {
      if (box.id === id) {
        return {
          ...box,
          color: box.color === 'white' ? 'black' : 'white',
        };
      }
      return box;
    });

    setBoxes(updatedBoxes);
  };

  return (
    <div className="App">
      <h1>Colored Boxes</h1>
      <div className="box-container">
        {boxes.map((box) => (
          <div
            key={box.id}
            className={`box ${box.color}`}
            onClick={() => toggleColor(box.id)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
