import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  //State stuff
  const [inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


   // Use Effect
   useEffect(() => {
    filterHandler();
  }, [todos, status]); // Basically, you've created a function that runs everytime you change the state of whatever piece of state you wants to change (ex --> [todos, status, etc])

  //Functions
  const filterHandler = () => { // This function stores 'completed', 'uncompleted' and 'all' items in their respective states. Above, this function is fired everytime we touch:
    // a todo or the status
    switch(status) {
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
        setFilteredTodos(todos);
        break;
    }
  }

const saveLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem('todos', JSON.stringify([]));
  } else {
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dylan's To-Do List</h1>
      </header>
    <Form 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      inputText={inputText} 
      status={status} 
      setStatus={setStatus}
    />
       <TodoList 
        todos={todos}
        setTodos ={setTodos}
        filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
