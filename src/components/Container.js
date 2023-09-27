import React from "react";
import { useState } from "react";
import { forwardRef } from "react";
import {Icon} from "react-3d-icons";
import {react,javascript, git, css3,html5} from "react-3d-icons";
import './container.css';

function Container() {

return (
        <div className="content">
            <h1>Olá, Eu sou Pedro Rodriguez</h1>
            <i><b>Desenvolvedor Front-end</b></i>
                <div className="c">
                    
                <Icon file={react} color={'#fff'} scale={5}/>
                </div>
            <div className="skills">
                <div className="s"><Icon file={git} color={'#fff'} scale={5}/></div>
                <div className="s"><Icon file={css3} color={'#1c1c1c'} scale={5}/></div>
                <div className="s"><Icon file={javascript} color={'#1c1c1c'} scale={5}/></div> 
                <div className="s"><Icon file={html5} color={'#1c1c1c'} scale={5}/></div>
                
            </div>
        </div>


);

}
export default forwardRef(Container);