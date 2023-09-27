import React, { useState } from 'react'
import './calculadora.css'
export default function Calculadora(){
    var [num, setNum] = useState(0);
    var[primeiroValor, setOldnum] = useState(0);
    var[operator, setNewnum] = useState();
    function inputNum(e) {
        var input = e.target.value;
        if(num === 0){
            setNum(input);
        }else{
            setNum(num + input);

        }
    }
    function allClear(){
        setNum(0);
    }

    function porcenTagem(){
        setNum(num / 100);
    }

    function operationHandler(e){
            var operatorInput = e.target.value
            setNewnum(operatorInput);
            setOldnum(num);
            setNum(0);
    }
    function calculate(e){
        if( operator === ":"){
            setNum(primeiroValor / num)
        }
        if(operator === "+"){
            setNum(parseFloat(primeiroValor) + parseFloat(num) )
        }
        if(operator === "-"){
            setNum(parseFloat(primeiroValor) - parseFloat(num) )
        }
        if(operator === "x"){
            setNum(parseFloat(primeiroValor) * parseFloat(num) )
        }
        console.log(primeiroValor);
        console.log(num);
        console.log(operator);
    }
    
    return(
        <div className='box'>
            <div className='container'>
            <h1 className='result'>{num}</h1> <br></br>
            <button  id="fatores"  onClick={allClear} className='btn'>AC</button>
            <button   id="fatores" onClick={inputNum}value={"( )"} className='btn'>( )</button>
            <button id="fatores" onClick={porcenTagem} className='btn'> %</button>
            <button id="fatores" onClick={operationHandler}value={":"} className='btn'> :</button>
            <button id="fatores"    onClick={operationHandler} value={"-"} className='btn'> -</button>    
            <button  className='btn'onClick={inputNum}value={8}>8</button>
            <button  className='btn' onClick={inputNum}value={9} >9</button>
            <button  className='btn'onClick={allClear}>C</button>
            <button  className='btn' onClick={inputNum}value={","}>,</button>
            <button id="fatores" onClick={operationHandler} value={"+"} className='btn'>+</button>    
            <button  className='btn' onClick={inputNum}value={4} >4</button>
            <button  className='btn'onClick={inputNum}value={5} >5</button>
            <button  className='btn' onClick={inputNum}value={6}>6</button>
            <button  className='btn'onClick={inputNum} value={7}>7</button>
            <button id="fatores" className='btn'onClick={operationHandler} value={"x"}> X</button>    
            <button  className='btn' onClick={inputNum}value={0}> 0</button>
            <button  className='btn' onClick={inputNum}value={1}> 1</button>
            <button  className='btn'onClick={inputNum}value={2}> 2</button>
            <button  className='btn' onClick={inputNum}value={3}> 3</button>
            <button id="fatores" className='btn'onClick={calculate}>=</button> 
            </div>        
        </div>
    )
}