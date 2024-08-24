import React from 'react'

const passing = () => {
  let name='Ansar';

  let FullName=()=>{
    return 'Ansar mehmood';
  }

  let random=()=>{
    return Math.random()*100;
  }
   
  return (
    <div>
       <h1>my name is {name} and fullName is {FullName()}</h1> 
       <h2>And The Random Number is {random()}</h2>  
    </div>
  )
}

export default passing
