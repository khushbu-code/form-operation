
import React, { useState } from 'react';
function Todos() {
    const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState("")
 const[search,setSearch]=useState("")
  

  function handlesubmit(e) {
    e.preventDefault();
    const newtodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    }
    setTodos([...todos].concat(newtodo))
    setTodo("")
  }
  function showData(e){
    e.preventDefault();
    let newArray=[...todos].filter((todo)=>todo.text===search)
    setTodos(newArray)
    setSearch("")

  }
  function deleteTodo(id) {
    const updatedTodo = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodo)
  }
  function toggleComplete(id) {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodo)
    

  }
  function editTodo(id){
    const updatedTodo=[...todos].map((todo)=>{
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodo)
     setTodoEditing(null)
     setEditingText("")
  }
  function clean(){
    setTodo('')
  }
  
  //let newArray=[...todos];
  console.log(search)
  return (
    <div><br></br>
        <form onSubmit={handlesubmit}>
        <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}></input>
        <button type="submit">Add</button>
        
      </form><br></br>

       <form onSubmit={showData}>
           
        <input type="text" placeholder='Search...' onChange={(e)=>setSearch(e.target.value)} value={search}/>
        <button type='submit'>SEearch</button><br></br>
        </form><br></br>
        <button onClick={clean}>clean</button>

        {/* <ul>
          {newArray.filter((e)=>e.text.toLowerCase().includes(search)).map(e=>(
           <li>
             {e.text}
           </li>
          ))}
        </ul> */}
      {todos.map((todo) => <div key={todo.id} className="maincard">
      
      <input type="checkbox" onChange={() => toggleComplete(todo.id)} checked={todos.completed} />
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      {todoEditing===todo.id ? (<button onClick={()=>editTodo(todo.id)}>submit Edits</button>)
        :
        (<button onClick={() => setTodoEditing(todo.id)}>Edit</button>)}
        {}
        {todoEditing === todo.id ? (<input type="text" onChange={(e) => setEditingText(e.target.value)}
         value={editingText} />) 
        : 
          (<span>{todo.text}</span>)}
        {/* // ([...setTodo].filter((to)=>{
        //   to.text.toLowerCase().includes(search)
        // }).map((to)=>(<span>{todo.text}</span>)))}
         */}
         
      <br></br></div>)}
      
    </div>
  );
}

export default Todos