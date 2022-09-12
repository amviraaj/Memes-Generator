import React from "react";

    

function Meme() {

    const [meme , setMeme] = React.useState({
        toptext : "" ,
        bottomtext : "" ,
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })


    const [memeImage, setMemeImage] = React.useState([])
    

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * memeImage.length)
        const url = memeImage[randomNumber].url
        setMeme((prevState)=>{
              return  {  ...prevState , randomImage:url
        }
    }
        )
    }


    function handlechange(event){
        let {name,value} = event.target
        setMeme((prevstate)=>{
            return {...prevstate , [name] : value}
        })
    }
 

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res=> res.json())
            .then(data=> setMemeImage(data.data.memes))
    } ,[])


    return(
        <main className="main-meme">
            <div className="form-box">
                <input
                    type="text"
                    placeholder="Top-text"
                    className="form-input"
                    name="toptext"
                    value={meme.toptext}
                    onChange={handlechange}
                />


                <input 
                    type="text"
                    placeholder="bottom-text"
                    className="form-input"
                    name= "bottomtext"
                    value={meme.bottomtext}
                    onChange={handlechange}
                />

                <button onClick={getMemeImage} className="form-btn"  >Get a New Image 😎🙀</button>
            </div>
            <div className="meme" >
                <img src={meme.randomImage} className="meme--image" alt ="memeimage" />
                <h2 className="meme--text top">{meme.toptext}</h2>
                <h2 className="meme--text bottom">{meme.bottomtext}</h2>
            </div>
            </main>

    )
}

export default Meme;