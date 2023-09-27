import './component.css'
import { useEffect, useState } from 'react';
import ImageComponent from "./ImageComponent.js"


function ComponentDois() {
 
    
    return(
        <div>
            <div className="conteudodois">
              
                <div className="content">
                <div className='image'>
                <ImageComponent/>
              </div>
                    <p><b>Sobre mim<br></br></b><br></br>
                   <b>Sou iniciante na programação pretendo atuar no front-end no início mas quero me tornar Fullstack
                    passo bastante tempo estudando e me interesso muito por ciber-sergurança como Ofensive Security.
                    Atualmente moro em Porto Alegre-rs e trabalho como barista de cafés, estou buscando inicar minha carreira 
                    como programador.</b></p>
                    </div>
            </div>
        </div>
    )
}

export default ComponentDois;