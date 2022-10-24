import React from 'react';

export default function Navbar(props){
    return(
        <nav className='nav'>
            <img src = {`../images/${props.navLogo}`} alt="Nav Logo" className='nav--logo' />
            <span className='nav--title'>{props.title}</span>
            <span className = "nav--item">{props.item}</span>
        </nav>
    );
}