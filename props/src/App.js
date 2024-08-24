
import './App.css';
import Heading from './storing/heading';
import Passing from './storing/passing';
import ErrorMessage from './props/ErrorMessage';
import Catching from './props/catching';
function App(){

    let Ansar=[1,2,3,4,5,6];


    let catching2=['abdull','ansar','hamza'];
  if(Ansar.length==0){
    return (
      <>
       <h1>Number Shown</h1>
       <h2>This is Empty Array!</h2>
      </>
    )
  } 
  else{
    return(
      <>
      <h1>The Numbers of Array are </h1>
       {Ansar.map(number => <h2>{number}</h2>)}
      </>
    )
  }
  
  


  return (
    <div className="App">
     {/* <Heading/>
     <Passing/> */}
     {/* <ErrorMessage abdullah={Ansar}/>
     <Catching random={catching2}/> */}
     
    {/* <h1>Number Shown!</h1>
    {Ansar.length==0? <h1>Array is Error</h1>: <h1>Error is not Empty</h1>} */}

    </div>
  );
}

export default App;
