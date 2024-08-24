import React from "react";
import { useState } from "react";
const Main=()=>{           
    const [color,setColor]=useState('#3e3e3e');
    const [color1,setColor1]=useState('white');
    const changeBg=()=>{
        if(color=='#3e3e3e' && color1==='white'){
            setColor('white');
            setColor1('black');
        }
        else{
            setColor('#3e3e3e');
            setColor1('white');
        }
    }
    return(
        <div className="main">
         <h1 className="heading">
            Welcome to Ansar Academy
         </h1>
         <div className="paragraph-div" onClick={changeBg} style={{ backgroundColor: color ,color:color1}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ullam quis odit dolorum quaerat officiis soluta porro dolore molestiae eveniet! Cum doloremque deserunt porro atque numquam eos omnis nulla saepe? Quas accusamus unde voluptatum aliquid sed molestiae accusantium! Vero incidunt natus laboriosam sapiente? Quisquam quam, eos dolores nobis deleniti nam dolorem, voluptatem at minus, adipisci esse laboriosam amet? Quibusdam enim officia non? Eligendi id odit dicta dolore, iste maxime repellat ex eveniet nam. Quaerat, voluptas alias neque sunt dolores perferendis aut aliquam id fugit temporibus pariatur, repellat iure odit! A molestias cumque ducimus ut quos nihil tenetur veniam nisi nemo?</div>
        </div>
    )
}
 export default Main;