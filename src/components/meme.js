import React from 'react';
import memesData from '../memesData.js';

export default function Meme(){
    
    const [memeImage, setMemeImage] = React.useState({
        randomImage:"http://i.imgflip.com/1bij.jpg" ,
        topText: "",
        bottomText: "",
    })

    const [allMeme, setAllMeme] = React.useState([])

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
            ...prevState,
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

    console.log(memeImage.bottomText)

    return(
        <main className='form'>
            <div className='meme'>
                <input type = "text" onChange = {handleChange} placeholder = "Top text" name = "topText" value = {memeImage.topText} className='meme--input'/>
                <input type = "text" onChange = {handleChange} placeholder = "Bottom text" name = "bottomText" value = {memeImage.bottomText} className = "meme--input"/>
                <button className='form--button' onClick={getNewImage}>Get a new meme image</button>
            </div>
            <div>
                <img src = {memeImage.randomImage} alt = "Meme Image Goes Here" className='form--memeImage' />
                <h2 className = "meme--topText">{memeImage.topText}</h2>
                <h2 className = "meme--bottomText">{memeImage.bottomText}</h2>
            </div>
        </main>
    );
}

