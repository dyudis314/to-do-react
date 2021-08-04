import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
   
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                  <Todo 
                  text={todo.text} 
                  key={todo.id}
                  setTodos={setTodos}
                  todos={todos}
                  todo={todo}
                  />  // For each todos, you're mapping out a "todo" component in the form of <Todo />. So you're assigning "todo" == <Todo />
                ))}
            </ul>
        </div> 
    );
}

export default TodoList;