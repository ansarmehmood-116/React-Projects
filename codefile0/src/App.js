import logo from './logo.svg';
import './App.css';


// const show=()=>{
//   return "Assalam o alikom Mr."
// }

// function App() {
//   let name="Ansar Mahmood";
//   return (<>
//   <h1>{show()}{name}</h1>
//  <h2>sum of two + two is {2+2}</h2>
//   </>   
//   );
// }
// export default App;

let array=[1,2,3,4,5,6,7,8]
let display=(arr)=>{
  document.write(arr**2," ");
}
 function App(){
  return(<>
  <h1>{array.forEach(display)}</h1>
  </>);
 }
export default App;