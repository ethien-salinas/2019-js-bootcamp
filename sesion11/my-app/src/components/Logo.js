import React from 'react'
export default function Logo(props){
    return <img src={props.logo} className="App-logo" alt="logo" />
}
// * Inyectar Logo.js en Header.js
// * recibir la imagen como una propiedad desde App.js