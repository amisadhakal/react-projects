import {useState} from "react";
const App = () => {
  const[input,setInput] = useState("");
  const[todos,setTodos] = useState([]);
  return(
    <>
    <h1> To do list application  </h1>
    <input value={input}
    onChange={(event)=>{
      setInput(event.target.value)}}></input>
      <button onClick={()=>{
        setTodos([...todos,input]);
        setInput("")
      }}> Add todolist </button>
      {todos.map((todo,index)=>(
        <h2 key={index}>{todo} </h2>
      ))}

  
    

    
    </>
  );
};
export default App;