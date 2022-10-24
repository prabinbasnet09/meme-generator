import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import Meme from './components/meme';
import "./style.css"

ReactDOM.render(
    <dvi className = "container">
        <App />   
        <Meme /> 
    </dvi>, 
    document.getElementById("root"));