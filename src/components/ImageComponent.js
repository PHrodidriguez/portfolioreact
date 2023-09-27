import React from "react";
import phlindo from "./phlindo.jpg";
import "./image.css";


function ImageComponent () {
    return(
    <div>
        <img src={phlindo} alt="imagem perfil"></img>
    </div>
    )
}
export default ImageComponent;