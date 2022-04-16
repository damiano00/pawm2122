import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data , setData] = React.useState(null);
  const [name , setName] = React.useState(null);
  const [surname , setSurname] = React.useState(null);

  React.useEffect(()=>{
    fetch("/api")
    .then(response => response.json())
    .then((data) => {setName(JSON.stringify(data.nome)); setSurname(JSON.stringify(data.cognome));  } );
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
        <p>{surname}</p>
      </header>
    </div>
  );

}

export default App;
