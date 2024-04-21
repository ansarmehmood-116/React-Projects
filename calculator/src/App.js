import './App.css';
import React, { useState } from 'react'

const CalculatorApp =()=> {
  const [result,setResult] = useState ("0");

  // const handleClick=(e)=> {
  //    setResult(result.concat(e.target.name));
  // }

  //OR second way
  const handleClick = (e) => {
    const lastChar = result.slice(-1); // Get the last character in the result state
    const operators = ['+', '-', '*', '/','.'];
    if (result === "0" && !operators.includes(e.target.name)) {
      // If the current result is "0" and the pressed button is a number, replace "0"
      setResult(e.target.name);
    } else if (operators.includes(e.target.name) && operators.includes(lastChar)) {
      return;
    }
    else if (e.target.name === '.' && result.includes('.')) {
      return;
    }
    else {
      setResult(result.concat(e.target.name));
    }
  };
  
  const clear = ()=>{
      setResult("0");
  }
  const Backspace =()=>{
       setResult(result.slice(0,result.length-1));
       // OR we can also write
       // setResult(result.slice(0,-1));
  }
  const calculate =()=>{
    try{
      setResult(eval(result).toString());
    }catch(err){
      setResult("error")
    }
  }
  return (
    <>
      <div className='container'>
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className='highlight' onClick={clear} id='Clear'>Clear</button>
          <button className='highlight' onClick={Backspace} id='Backspace'>C</button>
          <button className='highlight' name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className='highlight' name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className='highlight' name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className='highlight' name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          <button className='highlight' onClick={calculate} id='result'>=</button>
          </div>  
      </div>
    </>
  );
}

export default CalculatorApp;
