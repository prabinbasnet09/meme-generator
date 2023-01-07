import React from 'react';
import { useState } from 'react';


export default function Meme(){
    
    const [memeImage, setMemeImage] = React.useState({
        randomImage:"http://i.imgflip.com/1bij.jpg" ,
        topText: "",
        bottomText: "",
    })

    const [allMeme, setAllMeme] = React.useState([]);

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
        }
        getMemes();
    }, [memeImage])

    function getNewImage(){
        const random =   Math.floor(Math.random() * allMeme.length);
        const url = allMeme[random].url
        setMemeImage(prevState => ({
            topText: "",
            bottomText: "",
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMemeImage(prevMemeImage => {
            return({
                ...prevMemeImage,
                [name]: value
            })
        })
    }

    return(
        <div>
            <main className='form'>
                <div className='meme'>
                    <input type = "text" onChange = {handleChange} placeholder = "Top text" name = "topText" value = {memeImage.topText} maxlength="23" className='meme--input'/>
                    <input type = "text" onChange = {handleChange} placeholder = "Bottom text" name = "bottomText" value = {memeImage.bottomText} maxlength="23" className = "meme--input"/>
                    <button className='form--button' onClick={getNewImage}>Get a new meme image</button>
                </div>
                <div className='meme-tools'>
                    <h2 className = "meme--topText"><span>{memeImage.topText}</span></h2>
                    <div className='image-box'>
                        <img src = {memeImage.randomImage} alt = "Meme Image Goes Here" className='form--memeImage' />
                    </div>
                    <h2 className = "meme--bottomText"><span>{memeImage.bottomText}</span></h2>
                </div>
            </main>
        </div>
    );
}

