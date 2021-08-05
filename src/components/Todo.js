import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {
     // Events
     const deleteHandler = () => {
      setTodos(todos.filter((el) =>
       el.id !== todo.id));
        const list = todo;
        console.log(list);
    };

    // Filter keeps items that meet the criteria you give it
    
    const completeHandler = () => {
       console.log(todo);
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash-btn" onClick={deleteHandler}><i className="fas fa-trash">
                    </i>
                </button>
        </div>
    );
}

export default Todo;

/* Line 24 breakdown: this list element has a regular classname of "todo-item". We want to dynamically toggle another classname when the user clicks the button. 
So we wrap everything in a function that handles this toggle. If todo.completed property then it toggles to "completed" class. Vice versa. */