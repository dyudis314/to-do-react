import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo=> (
                  <Todo text={todo.text}/>  // For each todos, you're mapping out a "todo" component in the form of <Todo />. So you're assigning "todo" == <Todo />
                ))}
            </ul>
        </div> 
    );
}

export default TodoList;