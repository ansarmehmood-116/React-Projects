const ErrorMessage=({abdullah})=>{
 return(
    <>
     {abdullah.length==0? <h1>Array is Empty</h1>: <h1>Array is Full</h1>}
    </>
 
 )
}

export default ErrorMessage;