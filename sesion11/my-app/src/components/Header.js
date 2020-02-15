import React from 'react'
import Logo from './Logo'
export default function Header(props) {
    return (
        <header className="App-header">
        <Logo logo={props.logo}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    )
}