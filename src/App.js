import React from 'react';
import './reset.css'
import './App.css';

const City = [
  "London",
  "Paris",
  "Tokyo"
]

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tabs Wireframe</h1>
      </header>
      <main className="WireFrame-Box">
        <div className="Button-Box">
          <button className="button-tab" onclick="openCity('')">London</button>
          <button className="button-tab" onclick="openCity('Paris')">Paris</button>
          <button className="button-tab" onclick="openCity('Tokyo')">Tokyo</button>
        </div>

        <div id="London" className="w3-container city">
          <h2>London</h2>
          <p>London is the capital city of England.</p>
        </div>

        <div id="Paris" className="w3-container city" style="display:none">
          <h2>Paris</h2>
          <p>Paris is the capital of France.</p>
        </div>

        <div id="Tokyo" className="w3-container city" style="display:none">
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
