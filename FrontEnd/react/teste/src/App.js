import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [resu,setResu] =useState([]);

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://trabalhoengsw.herokuapp.com/usuarios/get/all?pword=senha123", requestOptions)
    .then(response => response.text())
    .then((result) => setResu(result))
    .catch(error => console.log('error', error));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          usuarios cadastrados : {resu}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
