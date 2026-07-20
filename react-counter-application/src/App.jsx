import {useState} from "react";
const App = () => {
  const[count,setCount] = useState(0);
  return(
    <>
    <h1> Simple Counter Application</h1>
    <button onClick={ ()=>{
      setCount(count+1)}}> Increase Count </button>
      <button onClick={ ()=>{
        setCount(count-1)
      }}> Decrease Count</button>
      <button onClick={ ()=>{
        setCount(0)
      }}> Reset</button>
      <h2> {count} </h2>
    </>
  );
};
export default App;