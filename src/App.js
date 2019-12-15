import React from 'react';
import './reset.css'
import './App.css';
import WireFrame from './WireFrame'

// 


const City = [
  "London",
  "Paris",
  "Tokyo"
]

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  //document.getElementById(cityName).style.display = "block";  
}

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tabs Wireframe</h1>
      </header>
      <WireFrame />
    </div>
  );
}

export default App;
