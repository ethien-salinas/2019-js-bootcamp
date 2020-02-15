import React from 'react';
import logo from './images/logo.svg';
import './css/App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
    </div>
  );
}
export default App;
