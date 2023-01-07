import React from "react";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

export default function App(){
    useEffect(() => {
        alert("This is a simple Front end application to demonstrate the use of React's local state management. It's advanced form is still under development. Thank you!");
    }, [])
    return(
        <Navbar 
        navLogo = "trollFace.png"
        title = "Meme Generator"
        item = "React and JavaScript"
        />
    );
}