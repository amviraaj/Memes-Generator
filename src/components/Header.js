import React from "react";
import Image from "./memes.png"

function Header() {
    
    function hover(){
        alert("Hey Memer")
    }


    return(
        <header className="header">
            <h1>Memes Generator</h1>
            <img onClick={hover}  src ={Image} alt ="memes" className="memes-head" ></img>    
        </header>

    )
}

export default Header;