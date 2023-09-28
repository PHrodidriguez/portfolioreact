import './containerDois.css'
import {  forwardRef, useState } from 'react'
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

function ContainerDois(projets, ref) {
  return (
    <div ref={ref} className="projets">
      <a href='https://phrodidriguez.github.io/calculator/' target="_blank"><div className="proj1"></div></a>
      <a href='https://phrodidriguez.github.io/checklist/'target='_blank'><div className="proj2" ></div> </a>
      <a href='https://phrodidriguez.github.io/cepsearch/' target="_blank"> <div className="proj3"></div></a>
      <div className="proj4"></div>
    </div>
  );
}

export default React.forwardRef(ContainerDois);
